<?php namespace App\Http\Controllers\Admin\API;
      use App\Http\Controllers\Controller;
      use App\Models\Manipulation;
      use App\Models\DoctorText;
      use App\Models\Language;
      use Illuminate\Http\Response;
      use Auth;

class ManipulationsController extends Controller {

	/*
	|--------------------------------------------------------------------------
	| Welcome Controller
	|--------------------------------------------------------------------------
	|
	| This controller renders the "marketing page" for the application and
	| is configured to only allow guests. Like most of the other sample
	| controllers, you are free to modify or remove it as you desire.
	|
	*/

	/**
	 * Create a new controller instance.
	 *
	 * @return void
	 */
	public function __construct(RequestHelper $requestHelper)
	{
	//	$this->middleware('auth');
	}

	/**
	 * Show the application welcome screen to the user.
	 *
	 * @return Response
	 */

	public function create()
    	{
    	$postData = \Input::all();
    	if(\Input::hasFile('file')){
    	    $fileExtension = \Input::file('file')->getClientOriginalExtension();
    	    $postData['image'] = $postData['names'] . "." . $fileExtension;
            \Input::file('file')->move(public_path() . '/src/admin/img/doctors/', $postData['image']);
    	}

         $createRecord = RequestHelper::writeAllExcept(new Doctor(),$postData,['file']);
		//	return response()->json(['status' => $createRecord['status']],$createRecord['code']);
    	}

	public function read($id = null)
	{

        try{

            $languagesList = Language::select('id','name','image','code')->get();

            if($id != null){
        		 $doctor = Doctor::where('doctors.id',$id)
        		 ->join('users as creator','creator.id','=','doctors.created_by_user_id')
                 ->join('users as updater','updater.id','=','doctors.updated_by_user_id')
                 ->select('doctors.id','doctors.names','image','has_percent','sort_order','is_visible','creator.name as created_by_user_name','updater.name as updated_by_user_name')
        		 ->first();
        		 return response()->json($doctor);
            } else {

        		 $manipulationsList = Manipulation::join('users as creator','creator.id','=','manipulations.created_by_user_id')
        		 ->join('users as updater','updater.id','=','manipulations.updated_by_user_id')
                 ->leftJoin('clients','clients.id', '=', 'manipulations.client_id')
                 ->select(
                     'manipulations.id',
                     'manipulations.doctor_id',
                     'manipulations.title',
                     'manipulations.description',
                     'manipulations.date_of_manipulation' ,
                     'clients.names as client_names',
                     'clients.id as client_id',
                     'clients.phone as client_phone',
                     'creator.name as created_by_user_name',
                     'updater.name as updated_by_user_name')
                 ->get();


                foreach($manipulationsList as $manipulation){
                    foreach($languagesList as $language){
                        $textsLanguages[$language->code] = DoctorText::where('doctor_id','=',$manipulation->doctor_id)->where('language_id','=',$language->id)->select('names')->first();
                    }
                    $manipulation->texts = $textsLanguages;
                }

                 return response()->json($manipulationsList);
            }
        }catch(\Illuminate\Database\QueryException $e){
            return response()->json(array('status' => $e->getMessage()
                       ), 500);

        }

       
	}

	public function update($id = null)
	{
	    if($id != null){
	        $postData = \Input::all();
	        if(\Input::hasFile('file')){
                	    $fileExtension = \Input::file('file')->getClientOriginalExtension();
                	    $postData['image'] = $postData['names'] . "." . $fileExtension;
                        \Input::file('file')->move(public_path() . '/src/admin/img/doctors/', $postData['image']);
                	}
            $createRecord = RequestHelper::writeAllExcept(new Doctor(),$postData,['created_by_user_name','updated_by_user_name']);
            return response()->json(['status' => $createRecord['status']],$createRecord['code']);
        }

	}

	public function delete($id = null)
    {
    	if($id != null){
    		Doctor::where('id','=',$id)->delete();
    	}
    }

}
