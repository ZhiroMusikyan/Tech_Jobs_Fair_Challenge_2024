<?php

namespace App\Http\Controllers;

use App\Contact;
use App\Events\testWebsocket;
use Illuminate\Http\Request;

class ContactController extends Controller
{
    public function index(Request $request)
    {
        $query = Contact::query();

        // Sort by column
        if ($request->has('sort')) {
            $sortColumn = $request->input('sort');
            $sortDirection = $request->input('direction', 'asc');

            $query->orderBy($sortColumn, $sortDirection);
        }

        // Advanced search
        if ($request->has('search')) {
            $searchTerm = $request->input('search');
            $query->where(function($q) use ($searchTerm) {
                $q->where('name', 'like', "%$searchTerm%")
                    ->orWhere('surname', 'like', "%$searchTerm%")
                    ->orWhere('email', 'like', "%$searchTerm%")
                    ->orWhere('number', 'like', "%$searchTerm%")
                    ->orWhere('social_media_url', 'like', "%$searchTerm%")
                    ->orWhere('date_of_birth', 'like', "%$searchTerm%")
                    ->orWhere('note', 'like', "%$searchTerm%");
            });
        }

        $contacts = $query->paginate(4);
//        event( new testWebsocket);
        return response()->json(["contacts" => $contacts]);
    }

    public function createContact(Request $request){
        $contact = new Contact();
    }
}
