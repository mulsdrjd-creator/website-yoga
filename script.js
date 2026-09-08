/* =========================================================
   JADWAL PELAJARAN DIGITAL
   XII TJKT 2 - SMKN 1 KLATEN
   TAHUN AJARAN 2026/2027

   Fitur:
   - Login
   - Logout
   - Dark / Light Mode
   - LocalStorage
   - Jadwal 50 data
   - Jam realtime
   - Tanggal & hari
   - Jadwal hari ini
   - Pelajaran sekarang
   - Pelajaran berikutnya
   - Countdown
   - Highlight pelajaran aktif
   - Mobile schedule
   ========================================================= */


/* =========================================================
   KONFIGURASI LOGIN
   ========================================================= */

const LOGIN_USERNAME = "admin";
const LOGIN_PASSWORD = "12345";

const LOGIN_STORAGE_KEY = "scheduleLoggedIn";
const THEME_STORAGE_KEY = "theme";


/* =========================================================
   DATA JADWAL
   ========================================================= */

const jamPelajaran = [
    "07:15-08:00",
    "08:00-08:45",
    "08:45-09:30",
    "09:45-10:30",
    "10:30-11:15",
    "11:15-12:00",
    "12:30-13:15",
    "13:15-14:00",
    "14:00-14:45",
    "14:45-15:30"
];

const daftarHari = [
    "Senin",
    "Selasa",
    "Rabu",
    "Kamis",
    "Jumat"
];

const jadwalPelajaran = [

    /* ================= SENIN ================= */

    {
        hari: "Senin",
        jam: "07:15-08:00",
        mapel: "Bahasa Inggris",
        guru: "Ibu Puji",
        ruang: "XII TJKT 2",
        status: "Aktif"
    },
    {
        hari: "Senin",
        jam: "08:00-08:45",
        mapel: "Bahasa Inggris",
        guru: "Ibu Puji",
        ruang: "XII TJKT 2",
        status: "Aktif"
    },
    {
        hari: "Senin",
        jam: "08:45-09:30",
        mapel: "Bahasa Inggris",
        guru: "Ibu Puji",
        ruang: "XII TJKT 2",
        status: "Aktif"
    },
    {
        hari: "Senin",
        jam: "09:45-10:30",
        mapel: "Bahasa Inggris",
        guru: "Ibu Puji",
        ruang: "XII TJKT 2",
        status: "Aktif"
    },
    {
        hari: "Senin",
        jam: "10:30-11:15",
        mapel: "Konsentrasi Keahlian",
        guru: "Ibu Shinta",
        ruang: "Lab TJKT",
        status: "Aktif"
    },
    {
        hari: "Senin",
        jam: "11:15-12:00",
        mapel: "Konsentrasi Keahlian",
        guru: "Ibu Shinta",
        ruang: "Lab TJKT",
        status: "Aktif"
    },
    {
        hari: "Senin",
        jam: "12:30-13:15",
        mapel: "Konsentrasi Keahlian",
        guru: "Ibu Shinta",
        ruang: "Lab TJKT",
        status: "Aktif"
    },
    {
        hari: "Senin",
        jam: "13:15-14:00",
        mapel: "Konsentrasi Keahlian",
        guru: "Ibu Shinta",
        ruang: "Lab TJKT",
        status: "Aktif"
    },
    {
        hari: "Senin",
        jam: "14:00-14:45",
        mapel: "Konsentrasi Keahlian",
        guru: "Ibu Shinta",
        ruang: "Lab TJKT",
        status: "Aktif"
    },
    {
        hari: "Senin",
        jam: "14:45-15:30",
        mapel: "Konsentrasi Keahlian",
        guru: "Ibu Shinta",
        ruang: "Lab TJKT",
        status: "Aktif"
    },


    /* ================= SELASA ================= */

    {
        hari: "Selasa",
        jam: "07:15-08:00",
        mapel: "Bahasa Indonesia",
        guru: "Bapak Faiz",
        ruang: "XII TJKT 2",
        status: "Aktif"
    },
    {
        hari: "Selasa",
        jam: "08:00-08:45",
        mapel: "Bahasa Indonesia",
        guru: "Bapak Faiz",
        ruang: "XII TJKT 2",
        status: "Aktif"
    },
    {
        hari: "Selasa",
        jam: "08:45-09:30",
        mapel: "Bahasa Indonesia",
        guru: "Bapak Faiz",
        ruang: "XII TJKT 2",
        status: "Aktif"
    },
    {
        hari: "Selasa",
        jam: "09:45-10:30",
        mapel: "PAI",
        guru: "Bapak Amri",
        ruang: "XII TJKT 2",
        status: "Aktif"
    },
    {
        hari: "Selasa",
        jam: "10:30-11:15",
        mapel: "PAI",
        guru: "Bapak Amri",
        ruang: "XII TJKT 2",
        status: "Aktif"
    },
    {
        hari: "Selasa",
        jam: "11:15-12:00",
        mapel: "PAI",
        guru: "Bapak Amri",
        ruang: "XII TJKT 2",
        status: "Aktif"
    },
    {
        hari: "Selasa",
        jam: "12:30-13:15",
        mapel: "Mata Pelajaran Pilihan",
        guru: "Ibu Maya",
        ruang: "XII TJKT 2",
        status: "Aktif"
    },
    {
        hari: "Selasa",
        jam: "13:15-14:00",
        mapel: "Mata Pelajaran Pilihan",
        guru: "Ibu Maya",
        ruang: "XII TJKT 2",
        status: "Aktif"
    },
    {
        hari: "Selasa",
        jam: "14:00-14:45",
        mapel: "Mata Pelajaran Pilihan",
        guru: "Ibu Maya",
        ruang: "XII TJKT 2",
        status: "Aktif"
    },
    {
        hari: "Selasa",
        jam: "14:45-15:30",
        mapel: "Mata Pelajaran Pilihan",
        guru: "Ibu Maya",
        ruang: "XII TJKT 2",
        status: "Aktif"
    },


    /* ================= RABU ================= */

    {
        hari: "Rabu",
        jam: "07:15-08:00",
        mapel: "Bahasa Jawa",
        guru: "Bapak Didik",
        ruang: "XII TJKT 2",
        status: "Aktif"
    },
    {
        hari: "Rabu",
        jam: "08:00-08:45",
        mapel: "Bahasa Jawa",
        guru: "Bapak Didik",
        ruang: "XII TJKT 2",
        status: "Aktif"
    },
    {
        hari: "Rabu",
        jam: "08:45-09:30",
        mapel: "BK",
        guru: "Ibu Deni",
        ruang: "XII TJKT 2",
        status: "Aktif"
    },
    {
        hari: "Rabu",
        jam: "09:45-10:30",
        mapel: "Konsentrasi Keahlian",
        guru: "Bapak Joko",
        ruang: "Lab TJKT",
        status: "Aktif"
    },
    {
        hari: "Rabu",
        jam: "10:30-11:15",
        mapel: "Konsentrasi Keahlian",
        guru: "Bapak Joko",
        ruang: "Lab TJKT",
        status: "Aktif"
    },
    {
        hari: "Rabu",
        jam: "11:15-12:00",
        mapel: "Konsentrasi Keahlian",
        guru: "Bapak Joko",
        ruang: "Lab TJKT",
        status: "Aktif"
    },
    {
        hari: "Rabu",
        jam: "12:30-13:15",
        mapel: "Konsentrasi Keahlian",
        guru: "Bapak Joko",
        ruang: "Lab TJKT",
        status: "Aktif"
    },
    {
        hari: "Rabu",
        jam: "13:15-14:00",
        mapel: "Konsentrasi Keahlian",
        guru: "Bapak Joko",
        ruang: "Lab TJKT",
        status: "Aktif"
    },
    {
        hari: "Rabu",
        jam: "14:00-14:45",
        mapel: "Konsentrasi Keahlian",
        guru: "Bapak Joko",
        ruang: "Lab TJKT",
        status: "Aktif"
    },
    {
        hari: "Rabu",
        jam: "14:45-15:30",
        mapel: "Konsentrasi Keahlian",
        guru: "Bapak Joko",
        ruang: "Lab TJKT",
        status: "Aktif"
    },


    /* ================= KAMIS ================= */

    {
        hari: "Kamis",
        jam: "07:15-08:00",
        mapel: "Konsentrasi Keahlian",
        guru: "Bapak Haryadi",
        ruang: "Lab TJKT",
        status: "Aktif"
    },
    {
        hari: "Kamis",
        jam: "08:00-08:45",
        mapel: "Konsentrasi Keahlian",
        guru: "Bapak Haryadi",
        ruang: "Lab TJKT",
        status: "Aktif"
    },
    {
        hari: "Kamis",
        jam: "08:45-09:30",
        mapel: "Konsentrasi Keahlian",
        guru: "Bapak Haryadi",
        ruang: "Lab TJKT",
        status: "Aktif"
    },
    {
        hari: "Kamis",
        jam: "09:45-10:30",
        mapel: "Konsentrasi Keahlian",
        guru: "Bapak Haryadi",
        ruang: "Lab TJKT",
        status: "Aktif"
    },
    {
        hari: "Kamis",
        jam: "10:30-11:15",
        mapel: "Konsentrasi Keahlian",
        guru: "Bapak Haryadi",
        ruang: "Lab TJKT",
        status: "Aktif"
    },
    {
        hari: "Kamis",
        jam: "11:15-12:00",
        mapel: "Konsentrasi Keahlian",
        guru: "Bapak Haryadi",
        ruang: "Lab TJKT",
        status: "Aktif"
    },
    {
        hari: "Kamis",
        jam: "12:30-13:15",
        mapel: "Konsentrasi Keahlian",
        guru: "Bapak Haryadi",
        ruang: "Lab TJKT",
        status: "Aktif"
    },
    {
        hari: "Kamis",
        jam: "13:15-14:00",
        mapel: "Konsentrasi Keahlian",
        guru: "Bapak Haryadi",
        ruang: "Lab TJKT",
        status: "Aktif"
    },
    {
        hari: "Kamis",
        jam: "14:00-14:45",
        mapel: "Konsentrasi Keahlian",
        guru: "Bapak Haryadi",
        ruang: "Lab TJKT",
        status: "Aktif"
    },
    {
        hari: "Kamis",
        jam: "14:45-15:30",
        mapel: "Konsentrasi Keahlian",
        guru: "Bapak Haryadi",
        ruang: "Lab TJKT",
        status: "Aktif"
    },


    /* ================= JUMAT ================= */

    {
        hari: "Jumat",
        jam: "07:15-08:00",
        mapel: "Matematika",
        guru: "Bapak Widodo",
        ruang: "XII TJKT 2",
        status: "Aktif"
    },
    {
        hari: "Jumat",
        jam: "08:00-08:45",
        mapel: "Matematika",
        guru: "Bapak Widodo",
        ruang: "XII TJKT 2",
        status: "Aktif"
    },
    {
        hari: "Jumat",
        jam: "08:45-09:30",
        mapel: "Matematika",
        guru: "Bapak Widodo",
        ruang: "XII TJKT 2",
        status: "Aktif"
    },
    {
        hari: "Jumat",
        jam: "09:45-10:30",
        mapel: "KIK",
        guru: "Bapak Eko",
        ruang: "XII TJKT 2",
        status: "Aktif"
    },
    {
        hari: "Jumat",
        jam: "10:30-11:15",
        mapel: "KIK",
        guru: "Bapak Eko",
        ruang: "XII TJKT 2",
        status: "Aktif"
    },
    {
        hari: "Jumat",
        jam: "11:15-12:00",
        mapel: "KIK",
        guru: "Bapak Eko",
        ruang: "XII TJKT 2",
        status: "Aktif"
    },
    {
        hari: "Jumat",
        jam: "12:30-13:15",
        mapel: "KIK",
        guru: "Bapak Eko",
        ruang: "XII TJKT 2",
        status: "Aktif"
    },
    {
        hari: "Jumat",
        jam: "13:15-14:00",
        mapel: "KIK",
        guru: "Bapak Eko",
        ruang: "XII TJKT 2",
        status: "Aktif"
    },
    {
        hari: "Jumat",
        jam: "14:00-14:45",
        mapel: "KIK",
        guru: "Bapak Eko",
        ruang: "XII TJKT 2",
        status: "Aktif"
    },
    {
        hari: "Jumat",
        jam: "14:45-15:30",
        mapel: "KIK",
        guru: "Bapak Eko",
        ruang: "XII TJKT 2",
        status: "Aktif"
    }
];


/* =========================================================
   UTILITAS
   ========================================================= */

function jamKeMenit(jam) {

    if (typeof jam !== "string") {
        return 0;
    }

    const bagian = jam.split(":");

    if (bagian.length !== 2) {
        return 0;
    }

    const jamAngka = Number(bagian[0]);
    const menitAngka = Number(bagian[1]);

    if (
        Number.isNaN(jamAngka) ||
        Number.isNaN(menitAngka)
    ) {
        return 0;
    }

    return jamAngka * 60 + menitAngka;
}


function jamSelesaiKeMenit(jam) {

    if (typeof jam !== "string") {
        return 0;
    }

    const bagian = jam.split("-");

    if (bagian.length !== 2) {
        return 0;
    }

    return jamKeMenit(bagian[1]);
}


function formatCountdown(totalDetik) {

    if (
        typeof totalDetik !== "number" ||
        !Number.isFinite(totalDetik)
    ) {
        totalDetik = 0;
    }

    totalDetik = Math.max(
        0,
        Math.floor(totalDetik)
    );

    const jam =
        Math.floor(totalDetik / 3600);

    const menit =
        Math.floor((totalDetik % 3600) / 60);

    const detik =
        totalDetik % 60;

    return [
        String(jam).padStart(2, "0"),
        String(menit).padStart(2, "0"),
        String(detik).padStart(2, "0")
    ].join(":");
}


function getHariSekarang() {

    const hari = [
        "Minggu",
        "Senin",
        "Selasa",
        "Rabu",
        "Kamis",
        "Jumat",
        "Sabtu"
    ];

    return hari[new Date().getDay()];
}


function getDaftarWaktu() {
    return jamPelajaran.slice();
}


/* =========================================================
   CLOCK
   ========================================================= */

function updateClock() {

    const now = new Date();

    const clock =
        document.getElementById("digitalClock");

    const currentDay =
        document.getElementById("currentDay");

    const currentDate =
        document.getElementById("currentDate");

    if (clock) {

        const jam =
            String(now.getHours()).padStart(2, "0");

        const menit =
            String(now.getMinutes()).padStart(2, "0");

        const detik =
            String(now.getSeconds()).padStart(2, "0");

        clock.textContent =
            `${jam}.${menit}.${detik}`;
    }

    if (currentDay) {
        currentDay.textContent =
            getHariSekarang();
    }

    if (currentDate) {

        const tanggal =
            now.toLocaleDateString(
                "id-ID",
                {
                    day: "numeric",
                    month: "long",
                    year: "numeric"
                }
            );

        currentDate.textContent =
            tanggal;
    }
}


/* =========================================================
   SUBJECT CARD
   ========================================================= */

function createSubjectCard(item) {

    if (!item) {
        return "-";
    }

    return `
        <div class="subject-card"
             data-hari="${item.hari}"
             data-jam="${item.jam}">

            <div class="subject-name">
                ${item.mapel || "-"}
            </div>

            <div class="subject-detail">
                <i class="fa-solid fa-user"></i>
                ${item.guru || "-"}
            </div>

            <div class="subject-detail">
                <i class="fa-solid fa-location-dot"></i>
                ${item.ruang || "-"}
            </div>

            <div class="subject-status">
                ${item.status || "Aktif"}
            </div>

        </div>
    `;
}


/* =========================================================
   TABEL MINGGUAN
   ========================================================= */

function renderScheduleTable() {

    const tbody =
        document.getElementById(
            "scheduleTableBody"
        );

    if (!tbody) {
        return;
    }

    let html = "";

    jamPelajaran.forEach(function (waktu) {

        html += `
            <tr>
                <td>${waktu}</td>
        `;

        daftarHari.forEach(function (hari) {

            const item =
                jadwalPelajaran.find(function (jadwal) {

                    return (
                        jadwal.hari === hari &&
                        jadwal.jam === waktu
                    );

                });

            html += `
                <td>
                    ${
                        item
                            ? createSubjectCard(item)
                            : "-"
                    }
                </td>
            `;
        });

        html += "</tr>";
    });

    tbody.innerHTML = html;
}


/* =========================================================
   JADWAL HARI INI
   ========================================================= */

function renderTodaySchedule() {

    const container =
        document.getElementById(
            "todaySchedule"
        );

    const badge =
        document.getElementById(
            "todayBadge"
        );

    const hari =
        getHariSekarang();

    if (badge) {
        badge.textContent = hari;
    }

    if (!container) {
        return;
    }

    if (
        hari === "Sabtu" ||
        hari === "Minggu"
    ) {

        container.innerHTML = `
            <div class="empty-state">
                <i class="fa-solid fa-calendar-xmark"></i>
                <h3>Tidak ada jadwal pelajaran</h3>
                <p>Hari ini adalah ${hari}.</p>
            </div>
        `;

        return;
    }

    const jadwalHariIni =
        jadwalPelajaran.filter(function (item) {

            return item.hari === hari;

        });

    if (jadwalHariIni.length === 0) {

        container.innerHTML = `
            <div class="empty-state">
                <h3>Tidak ada jadwal</h3>
            </div>
        `;

        return;
    }

    container.innerHTML =
        jadwalHariIni.map(function (item) {

            return `
                <div class="today-card"
                     data-hari="${item.hari}"
                     data-jam="${item.jam}">

                    <div class="today-time">
                        ${item.jam}
                    </div>

                    <h3>
                        ${item.mapel}
                    </h3>

                    <p>
                        ${item.guru}
                    </p>

                    <p>
                        ${item.ruang}
                    </p>

                    <p>
                        ${item.status}
                    </p>

                </div>
            `;

        }).join("");
}


/* =========================================================
   PELAJARAN SEKARANG
   ========================================================= */

function getCurrentLesson() {

    const hari =
        getHariSekarang();

    if (
        hari === "Sabtu" ||
        hari === "Minggu"
    ) {
        return null;
    }

    const now =
        new Date();

    const menitSekarang =
        now.getHours() * 60 +
        now.getMinutes() +
        now.getSeconds() / 60;

    return jadwalPelajaran.find(function (item) {

        if (item.hari !== hari) {
            return false;
        }

        const bagian =
            item.jam.split("-");

        if (bagian.length !== 2) {
            return false;
        }

        const mulai =
            jamKeMenit(bagian[0]);

        const selesai =
            jamKeMenit(bagian[1]);

        return (
            menitSekarang >= mulai &&
            menitSekarang < selesai
        );

    }) || null;
}


/* =========================================================
   PELAJARAN BERIKUTNYA
   ========================================================= */

function getNextLesson() {

    const hari =
        getHariSekarang();

    if (
        hari === "Sabtu" ||
        hari === "Minggu"
    ) {
        return null;
    }

    const now =
        new Date();

    const menitSekarang =
        now.getHours() * 60 +
        now.getMinutes() +
        now.getSeconds() / 60;

    const jadwalHariIni =
        jadwalPelajaran
            .filter(function (item) {
                return item.hari === hari;
            })
            .sort(function (a, b) {
                return (
                    jamKeMenit(
                        a.jam.split("-")[0]
                    ) -
                    jamKeMenit(
                        b.jam.split("-")[0]
                    )
                );
            });

    return jadwalHariIni.find(function (item) {

        const mulai =
            jamKeMenit(
                item.jam.split("-")[0]
            );

        return mulai > menitSekarang;

    }) || null;
}


/* =========================================================
   RENDER CURRENT LESSON
   ========================================================= */

function renderCurrentLesson() {

    const container =
        document.getElementById(
            "currentLesson"
        );

    if (!container) {
        return;
    }

    const lesson =
        getCurrentLesson();

    if (!lesson) {

        container.innerHTML = `
            <div class="empty-state">
                <i class="fa-solid fa-clock"></i>
                <h3>Belum ada pelajaran yang berlangsung</h3>
                <p>Tidak ada pelajaran aktif saat ini.</p>
            </div>
        `;

        return;
    }

    container.innerHTML = `
        <div class="active-lesson">

            <div class="lesson-status">
                <span></span>
                SEDANG BERLANGSUNG
            </div>

            <h3>
                ${lesson.mapel}
            </h3>

            <div class="lesson-time">
                ${lesson.jam}
            </div>

            <div class="lesson-details">

                <span>
                    <i class="fa-solid fa-user"></i>
                    ${lesson.guru}
                </span>

                <span>
                    <i class="fa-solid fa-location-dot"></i>
                    ${lesson.ruang}
                </span>

                <span>
                    <i class="fa-solid fa-circle-check"></i>
                    ${lesson.status}
                </span>

            </div>

            <div
                class="countdown"
                id="currentCountdown"
            >
                Sisa waktu 00:00:00
            </div>

        </div>
    `;
}


/* =========================================================
   RENDER NEXT LESSON
   ========================================================= */

function renderNextLesson() {

    const container =
        document.getElementById(
            "nextLesson"
        );

    if (!container) {
        return;
    }

    const lesson =
        getNextLesson();

    if (!lesson) {

        container.innerHTML = `
            <div class="empty-state">
                <i class="fa-solid fa-calendar-check"></i>
                <h3>Semua pelajaran hari ini telah selesai.</h3>
                <p>Tidak ada pelajaran berikutnya.</p>
            </div>
        `;

        return;
    }

    container.innerHTML = `
        <div class="next-lesson-card">

            <h3>
                ${lesson.mapel}
            </h3>

            <div class="next-time">
                ${lesson.jam}
            </div>

            <div class="next-details">

                <span>
                    <i class="fa-solid fa-user"></i>
                    ${lesson.guru}
                </span>

                <span>
                    <i class="fa-solid fa-location-dot"></i>
                    ${lesson.ruang}
                </span>

            </div>

            <div
                class="countdown"
                id="nextCountdown"
            >
                Dimulai dalam 00:00:00
            </div>

        </div>
    `;
}


/* =========================================================
   HIGHLIGHT LESSON
   ========================================================= */

function highlightCurrentLesson() {

    const current =
        getCurrentLesson();

    const cards =
        document.querySelectorAll(
            ".subject-card"
        );

    cards.forEach(function (card) {

        const hari =
            card.dataset.hari;

        const jam =
            card.dataset.jam;

        const aktif =
            current &&
            current.hari === hari &&
            current.jam === jam;

        card.classList.toggle(
            "lesson-active",
            Boolean(aktif)
        );

        card.classList.toggle(
            "current",
            Boolean(aktif)
        );
    });


    const todayCards =
        document.querySelectorAll(
            ".today-card"
        );

    todayCards.forEach(function (card) {

        const hari =
            card.dataset.hari;

        const jam =
            card.dataset.jam;

        const aktif =
            current &&
            current.hari === hari &&
            current.jam === jam;

        card.classList.toggle(
            "active",
            Boolean(aktif)
        );
    });
}


/* =========================================================
   MOBILE SCHEDULE
   ========================================================= */

function renderMobileSchedule() {

    const container =
        document.getElementById(
            "mobileSchedule"
        );

    if (!container) {
        return;
    }

    let html = "";

    daftarHari.forEach(function (hari) {

        const jadwalHari =
            jadwalPelajaran.filter(function (item) {

                return item.hari === hari;

            });

        html += `
            <div class="mobile-day">

                <div class="mobile-day-header">

                    <h3>
                        ${hari}
                    </h3>

                    <span>
                        ${jadwalHari.length} Pelajaran
                    </span>

                </div>
        `;

        jadwalHari.forEach(function (item) {

            html += `
                <div
                    class="mobile-subject"
                    data-hari="${item.hari}"
                    data-jam="${item.jam}"
                >

                    <div class="mobile-subject-time">
                        ${item.jam}
                    </div>

                    <div class="mobile-subject-name">
                        ${item.mapel}
                    </div>

                    <div class="mobile-subject-info">
                        ${item.guru}
                    </div>

                    <div class="mobile-subject-info">
                        ${item.ruang}
                    </div>

                    <div class="mobile-subject-info">
                        ${item.status}
                    </div>

                </div>
            `;
        });

        html += `
            </div>
        `;
    });

    container.innerHTML = html;
}


/* =========================================================
   COUNTDOWN
   ========================================================= */

function updateCountdown() {

    const current =
        getCurrentLesson();

    const next =
        getNextLesson();

    const now =
        new Date();

    const sekarang =
        now.getHours() * 60 * 60 +
        now.getMinutes() * 60 +
        now.getSeconds();


    /* ================= CURRENT ================= */

    const currentCountdown =
        document.getElementById(
            "currentCountdown"
        );

    if (currentCountdown && current) {

        const selesai =
            current.jam.split("-")[1];

        const selesaiMenit =
            jamKeMenit(selesai);

        const selesaiDetik =
            selesaiMenit * 60;

        const sisa =
            selesaiDetik - sekarang;

        currentCountdown.textContent =
            `Sisa waktu ${formatCountdown(sisa)}`;
    }


    /* ================= NEXT ================= */

    const nextCountdown =
        document.getElementById(
            "nextCountdown"
        );

    if (nextCountdown && next) {

        const mulai =
            next.jam.split("-")[0];

        const mulaiMenit =
            jamKeMenit(mulai);

        const mulaiDetik =
            mulaiMenit * 60;

        const sisa =
            mulaiDetik - sekarang;

        nextCountdown.textContent =
            `Dimulai dalam ${formatCountdown(sisa)}`;
    }
}


/* =========================================================
   THEME
   ========================================================= */

function getSavedTheme() {

    try {

        const saved =
            localStorage.getItem(
                THEME_STORAGE_KEY
            );

        if (saved === "light") {
            return "light";
        }

        if (saved === "dark") {
            return "dark";
        }

    } catch (error) {
        // Abaikan error localStorage
    }

    return "dark";
}


function setTheme(theme) {

    if (!document.body) {
        return;
    }

    document.body.classList.remove(
        "dark-mode",
        "light-mode"
    );

    if (theme === "light") {

        document.body.classList.add(
            "light-mode"
        );

        try {
            localStorage.setItem(
                THEME_STORAGE_KEY,
                "light"
            );
        } catch (error) {
            // Abaikan
        }

    } else {

        document.body.classList.add(
            "dark-mode"
        );

        try {
            localStorage.setItem(
                THEME_STORAGE_KEY,
                "dark"
            );
        } catch (error) {
            // Abaikan
        }
    }

    updateThemeButton();
}


function toggleTheme() {

    if (!document.body) {
        return;
    }

    if (
        document.body.classList.contains(
            "dark-mode"
        )
    ) {
        setTheme("light");
    } else {
        setTheme("dark");
    }
}


function updateThemeButton() {

    const button =
        document.getElementById(
            "themeShortcut"
        );

    if (!button) {
        return;
    }

    const icon =
        button.querySelector("i");

    const text =
        button.querySelector(
            ".theme-text"
        );

    const light =
        document.body.classList.contains(
            "light-mode"
        );

    if (icon) {

        icon.classList.remove(
            "fa-moon",
            "fa-sun"
        );

        icon.classList.add(
            light
                ? "fa-sun"
                : "fa-moon"
        );
    }

    if (text) {

        text.textContent =
            light
                ? "Mode Terang"
                : "Mode Gelap";
    }
}


function createThemeShortcut() {

    if (
        document.getElementById(
            "themeShortcut"
        )
    ) {
        return;
    }

    const header =
        document.querySelector(
            ".header"
        );

    if (!header) {
        return;
    }

    const button =
        document.createElement(
            "button"
        );

    button.id =
        "themeShortcut";

    button.type =
        "button";

    button.className =
        "status-info";

    button.innerHTML = `
        <i class="fa-solid fa-moon"></i>
        <span class="theme-text">
            Mode Gelap
        </span>
    `;

    button.addEventListener(
        "click",
        toggleTheme
    );

    const datetime =
        header.querySelector(
            ".datetime-box"
        );

    if (datetime) {

        datetime.insertBefore(
            button,
            datetime.firstChild
        );

    } else {

        header.appendChild(button);
    }

    updateThemeButton();
}


function initTheme() {

    const theme =
        getSavedTheme();

    setTheme(theme);

    let themeToggle =
        document.getElementById(
            "themeToggle"
        );

    if (!themeToggle) {
        themeToggle =
            document.getElementById(
                "themeToggleBtn"
            );
    }

    if (!themeToggle) {
        themeToggle =
            document.getElementById(
                "darkModeToggle"
            );
    }

    if (!themeToggle) {
        themeToggle =
            document.getElementById(
                "themeButton"
            );
    }

    if (themeToggle) {

        if (
            themeToggle.dataset.themeReady !==
            "true"
        ) {

            themeToggle.addEventListener(
                "click",
                toggleTheme
            );

            themeToggle.dataset.themeReady =
                "true";
        }

    } else {

        createThemeShortcut();
    }
}


/* =========================================================
   LOGIN
   ========================================================= */

function isLoggedIn() {

    try {

        return (
            localStorage.getItem(
                LOGIN_STORAGE_KEY
            ) === "true"
        );

    } catch (error) {

        return false;
    }
}


function saveLogin() {

    try {

        localStorage.setItem(
            LOGIN_STORAGE_KEY,
            "true"
        );

    } catch (error) {
        // Abaikan
    }
}


function removeLogin() {

    try {

        localStorage.removeItem(
            LOGIN_STORAGE_KEY
        );

    } catch (error) {
        // Abaikan
    }
}


/* =========================================================
   LOGIN SCREEN
   ========================================================= */

function createLoginScreen() {

    if (
        document.getElementById(
            "loginScreen"
        )
    ) {
        return;
    }

    const loginScreen =
        document.createElement(
            "div"
        );

    loginScreen.id =
        "loginScreen";

    loginScreen.innerHTML = `
        <div class="login-box">

            <div class="login-icon">
                <i class="fa-solid fa-network-wired"></i>
            </div>

            <div class="login-title">
                JADWAL PELAJARAN DIGITAL
            </div>

            <div class="login-subtitle">
                XII TJKT 2 · SMKN 1 Klaten
            </div>

            <form id="loginForm">

                <div class="login-field">

                    <label for="loginUsername">
                        Username
                    </label>

                    <input
                        type="text"
                        id="loginUsername"
                        autocomplete="username"
                        placeholder="Masukkan username"
                    >

                </div>

                <div class="login-field">

                    <label for="loginPassword">
                        Password
                    </label>

                    <div class="password-wrapper">

                        <input
                            type="password"
                            id="loginPassword"
                            autocomplete="current-password"
                            placeholder="Masukkan password"
                        >

                        <button
                            type="button"
                            id="showPassword"
                            aria-label="Tampilkan password"
                        >
                            <i class="fa-solid fa-eye"></i>
                        </button>

                    </div>

                </div>

                <div
                    id="loginError"
                    class="login-error"
                ></div>

                <button
                    type="submit"
                    class="login-button"
                >
                    <i class="fa-solid fa-right-to-bracket"></i>
                    MASUK
                </button>

            </form>

        </div>
    `;

    /*
     * CSS login dibuat seminimal mungkin melalui
     * class yang bisa ditangani oleh CSS website.
     *
     * Tidak mengubah warna melalui JavaScript.
     */

    loginScreen.style.position = "fixed";
    loginScreen.style.inset = "0";
    loginScreen.style.zIndex = "99999";
    loginScreen.style.display = "flex";
    loginScreen.style.alignItems = "center";
    loginScreen.style.justifyContent = "center";
    loginScreen.style.padding = "20px";
    loginScreen.style.background =
        "var(--bg-primary, #050b18)";

    document.body.appendChild(
        loginScreen
    );

    setupLoginEvents();
}


function setupLoginEvents() {

    const form =
        document.getElementById(
            "loginForm"
        );

    const username =
        document.getElementById(
            "loginUsername"
        );

    const password =
        document.getElementById(
            "loginPassword"
        );

    const error =
        document.getElementById(
            "loginError"
        );

    const showPassword =
        document.getElementById(
            "showPassword"
        );

    if (showPassword && password) {

        showPassword.addEventListener(
            "click",
            function () {

                const isPassword =
                    password.type ===
                    "password";

                password.type =
                    isPassword
                        ? "text"
                        : "password";

                const icon =
                    showPassword.querySelector(
                        "i"
                    );

                if (icon) {

                    icon.classList.toggle(
                        "fa-eye",
                        !isPassword
                    );

                    icon.classList.toggle(
                        "fa-eye-slash",
                        isPassword
                    );
                }
            }
        );
    }

    if (!form) {
        return;
    }

    form.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();

            const userValue =
                username
                    ? username.value.trim()
                    : "";

            const passwordValue =
                password
                    ? password.value
                    : "";

            if (
                userValue === LOGIN_USERNAME &&
                passwordValue === LOGIN_PASSWORD
            ) {

                saveLogin();

                const loginScreen =
                    document.getElementById(
                        "loginScreen"
                    );

                if (loginScreen) {
                    loginScreen.remove();
                }

                startScheduleSystem();

            } else {

                if (error) {

                    error.textContent =
                        "Username atau password salah.";

                }

                if (password) {
                    password.value = "";
                    password.focus();
                }
            }
        }
    );
}


/* =========================================================
   LOGOUT
   ========================================================= */

function createLogoutButton() {

    const footer =
        document.querySelector(
            ".footer"
        );

    if (!footer) {
        return;
    }

    if (
        document.getElementById(
            "logoutButton"
        )
    ) {
        return;
    }

    const logout =
        document.createElement(
            "button"
        );

    logout.id =
        "logoutButton";

    logout.type =
        "button";

    logout.innerHTML =
        `<i class="fa-solid fa-right-from-bracket"></i> Logout`;

    logout.addEventListener(
        "click",
        function () {

            removeLogin();

            location.reload();

        }
    );

    footer.appendChild(
        logout
    );
}


/* =========================================================
   SISTEM JADWAL
   ========================================================= */

let scheduleInterval = null;
let lastDay = null;
let lastCurrentLesson = null;
let lastNextLesson = null;


function startScheduleSystem() {

    initTheme();

    updateClock();

    renderScheduleTable();

    renderTodaySchedule();

    renderMobileSchedule();

    renderCurrentLesson();

    renderNextLesson();

    highlightCurrentLesson();

    updateCountdown();

    createLogoutButton();

    lastDay =
        getHariSekarang();

    lastCurrentLesson =
        getCurrentLesson();

    lastNextLesson =
        getNextLesson();


    if (scheduleInterval) {
        clearInterval(
            scheduleInterval
        );
    }


    scheduleInterval =
        setInterval(
            function () {

                updateClock();

                updateCountdown();

                const currentDay =
                    getHariSekarang();

                const currentLesson =
                    getCurrentLesson();

                const nextLesson =
                    getNextLesson();


                if (
                    currentDay !== lastDay
                ) {

                    lastDay =
                        currentDay;

                    renderTodaySchedule();

                    renderCurrentLesson();

                    renderNextLesson();

                    renderMobileSchedule();
                }


                const currentChanged =
                    (
                        currentLesson?.jam !==
                        lastCurrentLesson?.jam
                    ) ||
                    (
                        currentLesson?.mapel !==
                        lastCurrentLesson?.mapel
                    );


                const nextChanged =
                    (
                        nextLesson?.jam !==
                        lastNextLesson?.jam
                    ) ||
                    (
                        nextLesson?.mapel !==
                        lastNextLesson?.mapel
                    );


                if (currentChanged) {

                    renderCurrentLesson();

                    lastCurrentLesson =
                        currentLesson;
                }


                if (nextChanged) {

                    renderNextLesson();

                    lastNextLesson =
                        nextLesson;
                }


                highlightCurrentLesson();

            },
            1000
        );
}


/* =========================================================
   INIT
   ========================================================= */

function initScheduleApp() {

    /*
     * Tema diproses terlebih dahulu
     */
    initTheme();

    /*
     * Jika sudah login,
     * langsung jalankan website.
     */
    if (isLoggedIn()) {

        startScheduleSystem();

        return;
    }

    /*
     * Jika belum login,
     * tampilkan login.
     */
    createLoginScreen();
}


/* =========================================================
   DOM READY
   ========================================================= */

if (
    document.readyState === "loading"
) {

    document.addEventListener(
        "DOMContentLoaded",
        initScheduleApp
    );

} else {

    initScheduleApp();

}function initScheduleApp() {

    // 1. Tema
    initTheme();

    // 2. Jam
    updateClock();

    // 3. Jadwal
    renderScheduleTable();
    renderTodaySchedule();
    renderMobileSchedule();

    // 4. Pelajaran
    renderCurrentLesson();
    renderNextLesson();

    // 5. Highlight
    highlightCurrentLesson();

    // 6. Interval
    setInterval(function () {

        updateClock();
        updateCountdown();

        highlightCurrentLesson();

    }, 1000);
}if (document.readyState === "loading") {

    document.addEventListener(
        "DOMContentLoaded",
        initScheduleApp
    );

} else {

    initScheduleApp();

}