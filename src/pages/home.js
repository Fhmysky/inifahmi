export default `\n    <!-- NAVBAR -->\n    <nav class=\"navbar\">\n      <ul class=\"nav-menu\">\n        <li><a href=\"/#home\" class=\"nav-link active\">Home</a></li>\n        <li><a href=\"#about\" class=\"nav-link\">About</a></li>\n        <li><a href=\"#portofolio\" class=\"nav-link\">Portofolio</a></li>\n        <li><a href=\"#contact\" class=\"nav-link\">Contact</a></li>\n      </ul>\n    </nav>\n    <!-- Background Stars -->\n    <div id=\"stars-container\"></div>\n    <div class=\"animated-bg\">\n      <span></span>\n      <span></span>\n      <span></span>\n    </div>\n\n    <!-- HERO -->\n    <section id=\"home\" class=\"hero\">\n      <div class=\"hero-content\">\n        <h1>\n          <span class=\"blue\">Crafting Future</span><br />\n          Digital Experiences\n        </h1>\n        <br />\n        <p class=\"hero-desc\">\n          Berawal dari rasa penasaran, kemudian coba-coba, hingga akhirnya\n          menciptakan solusi digital yang bermanfaat. Dengan perpaduan antara\n          web development, UI/UX design, dan teknologi Artificial Intelligence,\n          saya membangun pengalaman digital yang modern, efisien, dan bermakna.\n        </p>\n\n        <div class=\"hero-buttons\">\n          <a href=\"#portofolio\" class=\"btn-primary\">Portofolio</a>\n          <a href=\"#contact\" class=\"btn-outline\">Contact Me →</a>\n        </div>\n      </div>\n    </section>\n\n    <!-- ABOUT -->\n    <section id=\"about\" class=\"about\">\n      <h2 class=\"about-title\">About Me</h2>\n      <div class=\"about-container\">\n        <!-- Kiri: Teks -->\n        <div class=\"about-text\">\n          <h2 class=\"about-greeting\">\n            Hi, I'm<br />\n            <span>Sul Fahmi. S, S.Kom</span>\n          </h2>\n\n          <p class=\"about-desc\">\n            Saya adalah lulusan Teknik Informatika yang memiliki minat pada\n            pengembangan aplikasi web, sistem informasi, dan teknologi\n            Artificial Intelligence (AI). Saat ini saya mendalami Laravel, PHP,\n            HTML, CSS, JavaScript, dan MySQL untuk membangun aplikasi yang\n            modern, responsif, dan efisien. Selain pengembangan web, saya juga\n            memiliki ketertarikan pada bidang Computer Vision dan Machine\n            Learning, khususnya implementasi YOLO untuk sistem deteksi objek dan\n            monitoring berbasis citra. Melalui beberapa proyek yang telah saya\n            kerjakan, saya terus mengasah kemampuan dalam pengembangan web,\n            analisis data, pemrograman, dan penerapan teknologi AI untuk\n            menyelesaikan permasalahan nyata.\n          </p>\n\n          <a href=\"/cv/cv-fahmi.pdf\" target=\"_blank\" class=\"btn-resume\">\n            📄 View Resume\n          </a>\n        </div>\n\n        <!-- Kanan: Gambar -->\n        <div class=\"about-image\">\n          <!-- Ganti src di bawah dengan alamat gambar kamu -->\n          <img src=\"/images/fahmi-porto.png\" alt=\"Sul Fahmi. S, S.Kom\" />\n        </div>\n      </div>\n\n            <!-- EDUCATION & EXPERIENCE -->
      <div class="about-history">
        <!-- EDUCATION -->
        <div class="history-column">
          <h3 class="history-title">Education</h3>

          <div class="history-list">
            <!-- Education 1 -->
            <div class="history-card">
              <div class="history-logo">
                <img src="images/logo-man.png" alt="Logo MAN pangkep" />
              </div>
              <div class="history-info">
                <h4>MAN Pangkep</h4>
                <p>Madrasah Aliyah Negeri Pangkajene Kepulauan</p>
                <span>2019 – 2022</span>
              </div>
            </div>

            <!-- Education 2 -->
            <div class="history-card">
              <div class="history-logo">
                <img
                  src="images/logo-mts.png"
                  alt="Logo MTs Muhammadiyah Jayapura"
                />
              </div>

              <div class="history-info">
                <h4>MTs DDI Galla Raya</h4>
                <p>Madrasah Tsanawiyah DDI Galla</p>
                <span>2016 – 2019</span>
              </div>
            </div>
          </div>
        </div>

        <!-- EXPERIENCE -->
        <div class="history-column">
          <h3 class="history-title">Experience</h3>

          <div class="history-list">
            <!-- Experience 1 -->
            <div class="history-card">
              <div class="history-logo">
                <img src="images/Unitama.png" alt="Logo Universitas STEKOM" />
              </div>

              <div class="history-info">
                <h4>UNITAMA</h4>
                <p>Universitas Teknologi Akba Makassar</p>
                <span>2022 – 2026</span>
              </div>
            </div>
          </div>
        </div>
      </div>    </section>\n\n    <!-- portofolio -->\n    <section id=\"portofolio\" class=\"portfolio\">\n      <h2>Portofolio</h2>\n\n      <div class=\"portfolio-tabs\">\n        <button class=\"tab-btn active\" onclick=\"showTab('projects', this)\">\n          Projects\n        </button>\n\n        <button class=\"tab-btn\" onclick=\"showTab('skills', this)\">\n          Skills\n        </button>\n\n        <button class=\"tab-btn\" onclick=\"showTab('certificates', this)\">\n          Certificates\n        </button>\n      </div>\n\n      <!-- PROJECTS -->\n      <div id=\"projects\" class=\"tab-content active\">\n        <div class=\"project-container\">\n          <div class=\"project-card\">\n            <img src=\"/images/cashier-management.jpeg\"\n              alt=\"Counter Cashier Management System\"\n            />\n\n            <div class=\"project-content\">\n              <h3>Counter Cashier Management System</h3>\n\n              <p>\n                Sistem kasir berbasis web untuk mengelola produk, transaksi\n                penjualan, stok barang, dan laporan penjualan menggunakan PHP\n                dan MySQL.\n              </p>\n\n              <a href=\"/cashier-management\" class=\"project-btn\">\n                Details\n                <i class=\"fa-solid fa-arrow-right\"></i>\n              </a>\n            </div>\n          </div>\n\n          <div class=\"project-card\">\n            <img src=\"/images/course-platform.jpeg\" alt=\"Course Platform\" />\n\n            <div class=\"project-content\">\n              <h3>E-Learning Course Platform</h3>\n              <p>\n                Platform e-learning berbasis web yang menyediakan informasi\n                kursus, profil instruktur, sertifikat, dan event pendidikan\n                dengan antarmuka responsif menggunakan HTML, CSS, JavaScript,\n                dan Bootstrap.\n              </p>\n\n              <a href=\"/course-platform\" class=\"project-btn\">\n                Details\n                <i class=\"fa-solid fa-arrow-right\"></i>\n              </a>\n            </div>\n          </div>\n\n          <div class=\"project-card\">\n            <img src=\"/images/student-monitoring.jpeg\"\n              alt=\"Student Monitoring System\"\n            />\n\n            <div class=\"project-content\">\n              <h3>Student Monitoring System</h3>\n              <p>\n                Student Monitoring System berbasis web yang dirancang untuk\n                membantu institusi pendidikan dalam memantau, mengelola, dan\n                mengevaluasi data serta perkembangan mahasiswa secara\n                terintegrasi.\n              </p>\n\n              <a href=\"/student-monitoring\" class=\"project-btn\">\n                Details\n                <i class=\"fa-solid fa-arrow-right\"></i>\n              </a>\n            </div>\n          </div>\n\n          <div class=\"project-card\">\n            <img src=\"/images/clothing-store.jpeg\"\n              alt=\"Clothing Store E-Commerce Website\"\n            />\n\n            <div class=\"project-content\">\n              <h3>Clothing Store E-Commerce Website</h3>\n              <p>\n                Clothing Store E-Commerce Website merupakan website penjualan\n                produk pakaian berbasis WordPress yang dirancang untuk membantu\n                pelaku usaha fashion dalam memasarkan dan menjual produknya\n                secara online.\n              </p>\n\n              <a href=\"/clothing-store\" class=\"project-btn\">\n                Details\n                <i class=\"fa-solid fa-arrow-right\"></i>\n              </a>\n            </div>\n          </div>\n\n          <div class=\"project-card\">\n            <img src=\"/images/health-guideapp.jpeg\" alt=\"Health Guide App\" />\n\n            <div class=\"project-content\">\n              <h3>Sehat Bijak - Health Guide App UI/UX Design</h3>\n              <p>\n                Sehat Bijak - Health Guide App UI/UX Design merupakan proyek\n                perancangan antarmuka dan pengalaman pengguna (UI/UX) untuk\n                aplikasi panduan kesehatan berbasis mobile.\n              </p>\n\n              <a href=\"/health-guideapp\" class=\"project-btn\">\n                Details\n                <i class=\"fa-solid fa-arrow-right\"></i>\n              </a>\n            </div>\n          </div>\n\n          <div class=\"project-card\">\n            <img src=\"/images/crowd-density.jpeg\"\n              alt=\"Crowd Density Monitoring\"\n            />\n\n            <div class=\"project-content\">\n              <h3>Real-Time Crowd Density Monitoring Using YOLO</h3>\n              <p>\n                Real-Time Crowd Density Monitoring Using YOLO merupakan sistem\n                berbasis Computer Vision yang dirancang untuk mendeteksi,\n                menghitung, dan memantau tingkat kepadatan manusia pada area\n                publik secara real-time.\n              </p>\n\n              <a href=\"/crowd-density\" class=\"project-btn\">\n                Details\n                <i class=\"fa-solid fa-arrow-right\"></i>\n              </a>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <!-- SKILLS -->\n        <div id="skills" class="tab-content">
        <div class="skill-container">
          <div class="skill-card">
            <i class="devicon-html5-plain colored"></i>
            <h3>HTML 5</h3>
          </div>

          <div class="skill-card">
            <i class="devicon-css3-plain colored"></i>
            <h3>CSS</h3>
          </div>

          <div class="skill-card">
            <i class="devicon-javascript-plain colored"></i>
            <h3>JavaScript</h3>
          </div>

          <div class="skill-card">
            <i class="devicon-php-plain colored"></i>
            <h3>PHP</h3>
          </div>

          <div class="skill-card">
            <i class="devicon-mysql-plain colored"></i>
            <h3>MySQL</h3>
          </div>

          <div class="skill-card">
            <i class="devicon-python-plain colored"></i>
            <h3>Python</h3>
          </div>

          <!-- Ultralytics -->
          <div class="skill-card">
            <div class="skill-logo"></div>
            <h3>Ultralytics</h3>
          </div>

          <!-- OpenCV -->
          <div class="skill-card">
            <i class="devicon-opencv-plain colored"></i>
            <h3>OpenCV</h3>
          </div>

          <!-- NumPy -->
          <div class="skill-card">
            <i class="devicon-numpy-plain colored"></i>
            <h3>NumPy</h3>
          </div>
        </div>
      </div>      <!-- CERTIFICATES -->\n      <div id=\"certificates\" class=\"tab-content\">\n        <div class=\"cert-container\">\n          <div class=\"project\">\n            <h3>Python Programming</h3>\n            <a href=\"#\">View Certificate</a>\n          </div>\n\n          <div class=\"project\">\n            <h3>Machine Learning</h3>\n            <a href=\"#\">View Certificate</a>\n          </div>\n\n          <div class=\"project\">\n            <h3>Computer Vision</h3>\n            <a href=\"#\">View Certificate</a>\n          </div>\n        </div>\n      </div>\n    </section>\n\n    <!-- CONTACT -->\n    <section id=\"contact\" class=\"contact\">\n      <h2 class=\"contact-title\">Hubungi Saya</h2>\n\n      <div class=\"contact-container\">\n        <div class=\"contact-card\">\n          <h3>Hubungi</h3>\n\n          <p>\n            Ada yang ingin didiskusikan? Silakan kirim pesan melalui form\n            berikut.\n          </p>\n\n          <form\n            id=\"contact-form\"\n            action=\"https://api.web3forms.com/submit\"\n            method=\"POST\"\n          >\n            <!-- Web3Forms Access Key -->\n            <input\n              type=\"hidden\"\n              name=\"access_key\"\n              value=\"280be175-6547-48bb-9870-130fb3ab7405\"\n            />\n\n            <!-- Subjek email -->\n            <input\n              type=\"hidden\"\n              name=\"subject\"\n              value=\"Pesan Baru dari Website Portfolio\"\n            />\n\n            <!-- Input nama -->\n            <input type=\"text\" name=\"name\" placeholder=\"Nama Anda\" required />\n\n            <!-- Input email -->\n            <input\n              type=\"email\"\n              name=\"email\"\n              placeholder=\"Email Anda\"\n              required\n            />\n\n            <!-- Input pesan -->\n            <textarea\n              name=\"message\"\n              rows=\"8\"\n              placeholder=\"Pesan Anda\"\n              required\n            ></textarea>\n\n            <div class=\"h-captcha\" data-captcha=\"true\"></div>\n\n            <!-- Tombol kirim -->\n            <button type=\"submit\">Kirim Pesan</button>\n          </form>\n\n          <div class=\"find-me\">\n            <h4>Find Me</h4>\n\n            <div class=\"social-links\">\n              <a href=\"#\">\n                <i class=\"fab fa-github\"></i>\n                GitHub\n              </a>\n\n              <a href=\"#\">\n                <i class=\"fab fa-linkedin\"></i>\n                LinkedIn\n              </a>\n\n              <a href=\"#\">\n                <i class=\"fab fa-instagram\"></i>\n                Instagram\n              </a>\n\n              <a href=\"#\">\n                <i class=\"fab fa-tiktok\"></i>\n                TikTok\n              </a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </section>\n\n    <footer>\n      <p>© 2026 portofolio Fahmi</p>\n    </footer>\n    \n    \n  `;
