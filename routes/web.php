<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', fn () => Inertia::render('Welcome'))->name('home');
Route::get('/presentation', fn () => Inertia::render('Presentation'))->name('presentation');

Route::get('/projects', fn () => Inertia::render('Projects/Index'))->name('projects.index');
Route::get('/projects/{slug}', fn ($slug) => Inertia::render('Projects/Show', ['slug' => $slug]))
    ->name('projects.show');

Route::get('/skills/{slug}', fn ($slug) => Inertia::render('Skills/Show', ['slug' => $slug]))
    ->name('skills.show');

Route::get('/competences', fn () => Inertia::render('Competences'))->name('competences');

// 👇 nouvelles
Route::get('/contact', fn () => Inertia::render('Contact'))->name('contact');
Route::get('/parcours', fn () => Inertia::render('Parcours'))->name('parcours');
