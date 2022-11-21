<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>MGDesign - Marketing For Entrepreneurs</title>
    @vite('resources/js/app.js')

{{--    @production--}}
{{--        @php--}}
{{--            $manifest = json_decode(file_get_contents(--}}
{{--                public_path('build/manifest.json')--}}
{{--            ));--}}
{{--        @endphp--}}
{{--        <script type="module" src="/build/{$manifest['resources/js/app.js']['file']}"></script>--}}
{{--        <link rel="stylesheet" href="/build/{$manifest['resources/js/app.js']['css'][0]}" />--}}
{{--    @else--}}
{{--            <script type="module" src="http://localhost:3000/@vite/client"></script>--}}
{{--            <script type="module" src="http://localhost:3000/resources/js/app.js"></script>--}}
{{--    @endproduction--}}

</head>
<body class="font-inter antialiased bg-white text-gray-900 tracking-tight">
    <div id="app">
    </div>
</body>
</html>
