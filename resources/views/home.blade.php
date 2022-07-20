<link rel="stylesheet" href="./assets/css/homeStyle.css">

<!-- Script -->
<script src="./assets/js/homeScript.js" defer></script>

<!-- Header -->
<header id="head">
    <div class="headerMdiv">
        <div>
            <a class="navbar-brand" href="/">
                <img src="./assets/images/logo.png" alt="" width="100" height="100" id="oilLogo">
            </a>
        </div>
        <div class="oilPlamText">
            <span class="oil">Oil Palm </span> <span class="tagline" id="headerName">Information & Monitoring System </span>
            <p class="tagline2">-NITI Initiative
            </p>
        </div>
        <div>
            <a href="/" id="logo">
                <img src="assets/images/nl.png" align="center" width="100" height="100" alt="Niti logo">
            </a>
        </div>
    </div>
</header>

@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">{{ __('Dashboard') }}</div>

                <div class="card-body">
                    @if (session('status'))
                    <div class="alert alert-success" role="alert">
                        {{ session('status') }}
                    </div>
                    @endif

                    {{ __('You are logged in!') }}
                </div>
            </div>
        </div>
    </div>
</div>
@endsection