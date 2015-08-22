<?php namespace App\Http\Controllers\Admin\API;
      use App\Http\Controllers\Controller;
      use App\Models\Language;
      use Illuminate\Support\Facades\Request;
      use Auth;

class LanguagesController extends Controller {

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
	public function __construct()
	{
		$this->middleware('auth');
	}

	/**
	 * Show the application welcome screen to the user.
	 *
	 * @return Response
	 */
	public function create()
    	{
			$postData = Request::all();
			$client = new Client();
			$client->names = $postData['names'];
			$client->phone = $postData['phone'];
			$client->email = $postData['email'];
			$client->dob = $postData['dob'];
			$client->address = $postData['address'];
			$client->created_by_user_id = Auth::user()->id;
			$client->updated_by_user_id = Auth::user()->id;
			$client->save();


    	}

	public function read($id = null)
	{

		if($id != null){
		 $language = Language::select('title','code','image','locale','is_visible','sort_order')->where('id',$id)->first();
		 return response()->json($language);
		} else {
            $languagesList = Language::all();
                return response()->json($languagesList);
		}

       
	}

	public function update($id = null)
	{
	    $postData = Request::all();
	    $postKeys = array_keys($postData);
        $client = Client::find($id);
        foreach($postKeys as $key){
            $client->{$key} = $postData[$key];
        }
        $client->updated_by_user_id = Auth::user()->id;
        $client->updated_at = date('Y-m-d H:i:s');
        $client->save();
	}

	public function delete($id = null)
    {
    	if($id != null){
    		Client::where('id','=',$id)->delete();
    	}
    }

}
