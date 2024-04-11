<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Doctor;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DoctorSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $user = User::create([
            'firstname' => 'Dr.SuperDoctor',
            'lastname' => 'Dr.SuperDoctor',
            'email' => 'admin@superDoctor.com',
            'password' => Hash::make('123456'), 
            'role' => 'Doctor',
        ]);
        Doctor::create([
            'firstname' => 'Dr.SuperDoctor',
            'lastname' => 'Dr.SuperDoctor',
            'user_id' => $user->id,
        ]);
    }
}
