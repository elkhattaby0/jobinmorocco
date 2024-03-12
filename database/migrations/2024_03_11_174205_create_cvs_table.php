<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('cvs', function (Blueprint $table) {
            $table->id();
            $table->string('userId');
            $table->string('fullname');
            $table->date('dateBirth');
            $table->string('phoneNumbre');
            $table->text('address');
            $table->string('email');
            $table->text('education');
            $table->text('experience');
            $table->text('skills');
            $table->text('interests');
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('cvs');
    }
};
