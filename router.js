
function route(pathname, handle, response, productId) {
    console.log('pathname :' + pathname);

    if (typeof handle[pathname] == 'function') {
        handle[pathname](response, productId);
    } else {
        response.writeHead(404, {'Content-Type' : 'text/html'});
        response.write('Not Found');
        response.end(); 
    }

}

exports.route = route;

/*
// 404 코드 넣기 전까지 크롬 에러 잡아주는 코드
function route(pathname, handle, response) {
    console.log('pathname :', pathname);

    // 파비콘은 그냥 조용히 종료
    if (pathname === '/favicon.ico') {
        response.writeHead(204);
        response.end();
        return;
    }

    if (typeof handle[pathname] === 'function') {
        handle[pathname](response);
    } else {
        response.writeHead(404, { 'Content-Type': 'text/plain' });
        response.write('404 Not Found');
        response.end();
    }
}
*/