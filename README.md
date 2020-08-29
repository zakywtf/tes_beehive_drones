# step to use

1. npm install --save
2. you can run project using <br/>
    a. npm start <br/>
    b. npm run debug <br/>
    c. npm run debug >> /dev/null <br/> <br/>

gunakan base url yang sudah di deploy ke heroku ->  https://zakyarticles.herokuapp.com/

A. Autentikasi<br/>
    1. Login
    post data ke url https://zakyarticles.herokuapp.com/api/login , dengan menggunakan body raw json : <br/>
    ```
    {
        "email":"zakywtf@gmail.com",
        "password":"123456"
    }
    ```
    return dari post data tersebut berupa token yang di gunakan sebagai autentikasi saat melakukan call api. contoh login dan return data seperti berikut ini: <br/>
    ![alt text](https://github.com/zakywtf/portal_berita/blob/master/documentation/login.png?raw=true)<br/><br/>
    2. Ganti password
    post data ke url https://zakyarticles.herokuapp.com/api/v1/users/change_pass , dengan menggunakan body raw json : <br/>
    ```
    {
        "oldPass":"123456",
        "newPass":"1234"
    }
    ```
    pada saat anda mengakses route /api/v1/ anda harus menyertakan token di bagian header seperti dibawah ini : 
    ![alt text](https://github.com/zakywtf/portal_berita/blob/master/documentation/headertoken.png?raw=true)<br/><br/>
    contoh ganti password seperti berikut ini: <br/>
    ![alt text](https://github.com/zakywtf/portal_berita/blob/master/documentation/changepass.png?raw=true)<br/><br/>
    3. Logout
    post data ke url https://zakyarticles.herokuapp.com/api/v1/users/change_pass dengan menyertakan token di header: <br/>
    contoh ganti logout seperti berikut ini: <br/>
    ![alt text](https://github.com/zakywtf/portal_berita/blob/master/documentation/logout.png?raw=true)<br/><br/>


B. get detail article<br/>
    use url http://localhost:2500/api/v1/articles/detail to get detail article. using raw json in your payload. example like this : <br/>
    ![alt text](https://github.com/zakywtf/portal_berita/blob/master/documentation/article_detail.png?raw=true)<br/><br/>

B. get books<br/>
    use url http://localhost:2500/api/v1/books to get books. using raw json in your payload. example like this : <br/>
    ![alt text](https://github.com/zakywtf/portal_berita/blob/master/documentation/get_books.png?raw=true)<br/><br/>