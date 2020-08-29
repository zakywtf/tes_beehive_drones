# step to use

1. npm install --save
2. you can run project using <br/>
    a. npm start <br/>
    b. npm run debug <br/>
    c. npm run debug >> /dev/null <br/> <br/>

gunakan base url yang sudah di deploy ke heroku ->  https://zakyarticles.herokuapp.com/

A. Autentikasi<br/>
    1. Login<br/>
    post data ke url https://zakyarticles.herokuapp.com/api/login , dengan menggunakan body raw json : <br/>
    ```
    {
        "email":"zakywtf@gmail.com",
        "password":"1234"
    }
    ```
    return dari post data tersebut berupa token yang di gunakan sebagai autentikasi saat melakukan call api. contoh login dan return data seperti berikut ini: <br/>
    ![alt text](https://github.com/zakywtf/portal_berita/blob/master/documentation/login.png?raw=true)<br/><br/><br/>
    2. Ganti password<br/>
    post data ke url https://zakyarticles.herokuapp.com/api/v1/users/change_pass , dengan menggunakan body raw json : <br/>
    ```
    {
        "oldPass":"123456",
        "newPass":"1234"
    }
    ```
    pada saat anda mengakses route /api/v1/ anda harus menyertakan token di bagian header seperti dibawah ini : 
    ![alt text](https://github.com/zakywtf/portal_berita/blob/master/documentation/headertoken.png?raw=true)<br/>
    contoh ganti password seperti berikut ini: <br/>
    ![alt text](https://github.com/zakywtf/portal_berita/blob/master/documentation/changepass.png?raw=true)<br/><br/><br/>
    3. Logout<br/>
    post data ke url https://zakyarticles.herokuapp.com/api/v1/users/logout dengan menyertakan token di header <br/>
    contoh logout seperti berikut ini: <br/>
    ![alt text](https://github.com/zakywtf/portal_berita/blob/master/documentation/logout.png?raw=true)<br/><br/><br/><br/>


B. Admin<br/>
    1. Lihat daftar admin<br/>
    dengan method 
    ```
    GET
    ```
    send data ke https://zakyarticles.herokuapp.com/api/v1/users/pagination/admin/1/10 , contohnya sebagai berikut: <br/>
    ![alt text](https://github.com/zakywtf/portal_berita/blob/master/documentation/getadmin.png?raw=true)<br/><br/><br/>
    2. Lihat daftar author<br/>
    dengan method 
    ```
    GET
    ```
    send data ke https://zakyarticles.herokuapp.com/api/v1/users/pagination/author/1/10 , contohnya sebagai berikut: <br/>
    ![alt text](https://github.com/zakywtf/portal_berita/blob/master/documentation/getauthor.png?raw=true)<br/><br/><br/>
    3. Lihat detail admin dan author<br/>
    dengan method 
    ```
    GET
    ```
    send data ke https://zakyarticles.herokuapp.com/api/v1/users/detail/:id_admin_or_id_author , contohnya sebagai berikut: <br/>
    ![alt text](https://github.com/zakywtf/portal_berita/blob/master/documentation/detailadminauthor.png?raw=true)<br/><br/><br/>
    4. Lihat daftar artikel<br/>
    dengan method 
    ```
    GET
    ```
    send data ke https://zakyarticles.herokuapp.com/api/v1/article/pagination/1/10 , contohnya sebagai berikut: <br/>
    ![alt text](https://github.com/zakywtf/portal_berita/blob/master/documentation/getarticles.png?raw=true)<br/><br/><br/>
    5. Hapus artikel<br/>
    dengan method 
    ```
    POST
    ```
    send data ke https://zakyarticles.herokuapp.com/api/v1/article/delete/:id_article , contohnya sebagai berikut: <br/>
    ![alt text](https://github.com/zakywtf/portal_berita/blob/master/documentation/deletearticle.png?raw=true)<br/><br/><br/>
    6. Hapus author<br/>
    dengan method 
    ```
    POST
    ```
    send data ke https://zakyarticles.herokuapp.com/api/v1/category/create , contohnya sebagai berikut: <br/>
    ![alt text](https://github.com/zakywtf/portal_berita/blob/master/documentation/deleteauthor.png?raw=true)<br/><br/><br/>
    7. Ganti password<br/>
    post data ke url https://zakyarticles.herokuapp.com/api/v1/category/create , dengan menggunakan body raw json : <br/>
    ```
    {
        "name":"Fashion"
    }
    ```
    contoh ganti password seperti berikut ini: <br/>
    ![alt text](https://github.com/zakywtf/portal_berita/blob/master/documentation/createcategory.png?raw=true)<br/><br/><br/>
    4. Lihat daftar category<br/>
    dengan method 
    ```
    GET
    ```
    send data ke hhttps://zakyarticles.herokuapp.com/api/v1/category/ , contohnya sebagai berikut: <br/>
    ![alt text](https://github.com/zakywtf/portal_berita/blob/master/documentation/getcategory.png?raw=true)<br/><br/><br/><br/>


B. Author<br/>
    1. Lihat daftar artikel<br/>
    dengan method 
    ```
    GET
    ```
    send data ke https://zakyarticles.herokuapp.com/api/v1/article/pagination/1/10 , jika token tersebut merupakan return dari login author maka sistem akan otomatis mem-filter artikel berdasarkan author yang sedang aktif. contohnya sebagai berikut: <br/>
    ![alt text](https://github.com/zakywtf/portal_berita/blob/master/documentation/getarticles.png?raw=true)<br/><br/><br/>
    2. Lihat detail artikel<br/>
    dengan method 
    ```
    GET
    ```
    send data ke https://zakyarticles.herokuapp.com/api/v1/article/detail/:id_article , contohnya sebagai berikut: <br/>
    ![alt text](https://github.com/zakywtf/portal_berita/blob/master/documentation/detailarticle.png?raw=true)<br/><br/><br/>
    3. Lihat daftar category<br/>
    dengan method 
    ```
    GET
    ```
    send data ke hhttps://zakyarticles.herokuapp.com/api/v1/category/ , contohnya sebagai berikut: <br/>
    ![alt text](https://github.com/zakywtf/portal_berita/blob/master/documentation/getcategory.png?raw=true)<br/><br/><br/>
    4. Cari artikel berdasarkan tag<br/>
    dengan method 
    ```
    GET
    ```
    send data ke https://zakyarticles.herokuapp.com/api/v1/article/detail/:id_article , contohnya sebagai berikut: <br/>
    ![alt text](https://github.com/zakywtf/portal_berita/blob/master/documentation/dad.png?raw=true)<br/><br/><br/>
    5. Edit artikel<br/>
    dengan method 
    ```
    POST
    ```
    send data ke https://zakyarticles.herokuapp.com/api/v1/article/detail/:id_article ,dengan menggunakan body raw json : <br/>
    ```
    {
        "tags": [
            {
                "category_id": "5f4a0192e4d75500416120c4"
            }
        ],
        "title": "Total Hadiah The International 10 Sudah Mencapai US$ 34 Juta",
        "article":"Teks sudah di edit."
    }
    ```
    contohnya sebagai berikut: <br/>
    ![alt text](https://github.com/zakywtf/portal_berita/blob/master/documentation/editarticle.png?raw=true)<br/><br/><br/>
    6. Hapus artikel<br/>
    dengan method 
    ```
    POST
    ```
    send data ke https://zakyarticles.herokuapp.com/api/v1/article/delete/:id_article , contohnya sebagai berikut: <br/>
    ![alt text](https://github.com/zakywtf/portal_berita/blob/master/documentation/deletearticle.png?raw=true)<br/><br/><br/>