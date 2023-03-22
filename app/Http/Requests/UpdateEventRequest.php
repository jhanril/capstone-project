<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateEventRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        $job = $this->route('event');
        if ($this->user()->id !== $job->user_id) {
            return false;
        }
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
     */
    public function rules(): array
    {
        return [
            'user_id' => 'sometimes|required|exists:users,id',
            'user_id' => 'sometimes|required|exists:users,id',
            'event_name' => 'sometimes|required|string|max:255',
            'event_description' => 'sometimes|required|string',
            'location' => 'sometimes|required|string|max:255',
            'start_date' => 'sometimes|required|date_format:Y-m-d H:i:s',
            'end_date' => 'sometimes|required|date_format:Y-m-d H:i:s|after:start_date',
        ];
    }
}
