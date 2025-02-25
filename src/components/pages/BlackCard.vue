<template>
<div class="card">
        <div class="card-header">
            <img src="https://img.icons8.com/?size=100&id=63192&format=png&color=000000" alt="Icon" class="card-img-top">
            <h5 class="card-title">Unlock the secure world</h5>
        </div>
        <p class="card-text">This is a simple card with an icon, title, and button more lorem ipsum sum.</p>
        <button class="btn-gray">Click Me</button>
    </div>
</template>
<style lang="scss" scoped>

        .card-header {
            display: flex;
            align-items: center;
            gap: 0.75rem;
            width: 100%;
        }
        .card-img-top {
            width: 50px;
            height: 50px;
        }
        .card-title {
            font-weight: bold;
            color:#c5c5c5;
            font-size: 1.25rem;
            margin: 0;
        }
        .card-text {
            text-align: left;
            color:#707271;
            width: 100%;
        }
        .btn-gray {
            margin-top:8px;
            display: inline-block;
            padding: 0.5rem 1rem;
            border: none;
            background-color: #121212;
            color: #a6a6a6;
            border-radius: 0.25rem;
            cursor: pointer;
            text-decoration: none;
            align-self: flex-start;
        }
        .btn-gray:hover {
            background-color: #333435;
        }
        .card {
            margin:10px;
            color:#707271;
            width: 350px;
            border: 1px solid #121212f1;
            border-radius:2px;
            box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
            padding: 1rem;
            background-color: #121212f1;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            position: relative;
        }
        .card::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 30%;
            height: 1px;
            background-color: green;
            border-top-left-radius: 0.5rem;
        }
         

         
</style>