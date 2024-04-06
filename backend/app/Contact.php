<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Contact extends Model
{

    /**
     * @return BelongsTo
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    protected $fillable = [
        'profile_picture',
        'name',
        'surname',
        'email',
        'number',
        'social_media_url',
        'access',
        'date_of_birth',
        'type_id',
        'note',
    ];
}
