<?php

namespace App\Services;

/**
 * @author Rohan Parkar
 * @since 1.0.0
 */
class CustomValidationService
{
    public function getRules(array $required_fields = [])
    {
        $rules = [
            'email'    => 'email',
            'password' => 'min:6',
        ];

        foreach ($required_fields as $field) {
            if (isset($rules[$field])) {
                $rules[$field] = 'required|' . $rules[$field];
            } else {
                $rules[$field] = 'required';
            }
        }

        return $rules;
    }
}
