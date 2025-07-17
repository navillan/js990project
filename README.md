For english you can start reading below. [Türkçe](#türkçe) için tıklayınız.

# Js990Proje

A full-stack restaurant reservation and guest management application built with React (frontend) and Express (backend). This project allows users to make reservations, and provides an admin panel for managing reservations and guests.


## Table of Contents
- [Features](#features)
- [Project Structure](#project-structure)
- [Backend](#backend)
- [Frontend](#frontend)
- [Setup & Installation](#setup--installation)
- [Usage](#usage)
- [Author](#author)

---

## Features
- **User Reservation:**
  - Step-by-step reservation form (date, time, guest count, contact info)
  - Reservation limitations for the availability of tables at same date and time(4)
  - Validation for name, email, and phone
  - Waiting list option if reservation is not available
  - Expanding the target audience with English language support in addition to Turkish
- **Admin Panel:**
  - Login with username/password (default: admin/1234)
  - View, search, add, update, and delete reservations
  - Mark reservations as completed
- **API:**
  - RESTful endpoints for guests and admin authentication

---

## Project Structure
```
Js990Proje/
  backend/
    guestEditors/      # Guest and admin logic
    routes/            # Express routers
    index.js           # Backend entry point
    package.json       # Backend dependencies
  frontend/
    public/            # Static files (index.html, CSS)
    src/
      api/             # Axios instance
      components/      # React components (App, AdminPage, MainPage, Steps)
      hooks/           # Custom React hooks (data fetching, admin, forms)
      index.js         # React entry point
    package.json       # Frontend dependencies
```

---

## Backend
- **Tech:** Node.js, Express, CORS
- **Entry:** `backend/index.js`
- **API Endpoints:**
  - `POST /api/guests/admin` — Admin login
  - `GET /api/guests/` — List all guests
  - `POST /api/guests/` — Add a new guest
  - `PUT /api/guests/:id` — Update guest (e.g., mark as completed)
  - `DELETE /api/guests/:id` — Delete guest
- **Logic:**
  - Guest and admin data are stored in-memory (no database)
  - Admin credentials are hardcoded (see `backend/guestEditors/admin.js`)

---

## Frontend
- **Tech:** React, Axios, Bootstrap
- **Entry:** `frontend/src/index.js`, `frontend/public/index.html`
- **Main Components:**
  - `App` — Main router, switches between user and admin views
  - `MainPage` — User reservation form
  - `Steps` — Step-by-step reservation logic
  - `AdminPage` — Admin login and panel
  - `AdminPaneli` — Admin reservation management
- **Custom Hooks:**
  - `useGuests` — Fetches guest data
  - `useCheckAdmin` — Handles admin login
  - `useCreateGuest`, `useDeleteGuest`, `useUpdate` — CRUD operations

---

## Setup & Installation


### Prerequisites
- Node.js (v16+ recommended)

### Backend
```bash
cd backend
npm install
npm start
```
The backend will run on [http://localhost:5000](http://localhost:5000)

### Frontend
```bash
cd frontend
npm install
npm start
```
The frontend will run on [http://localhost:3000](http://localhost:3000) by default.

---

## Usage
- **User:**
  - Visit the frontend URL and fill out the reservation form.
- **Admin:**
  - Go to `/admin` on the frontend, login with the default credentials, and manage reservations.  

---

## Author
- Mert Selamlar

---

## Türkçe

# Js990Proje

Bu proje, örnek bir restorantın rezervasyon sayfasını(frontend) ve yapılan rezervasyonların(backend) idare edilebilmesi için de bir admin sayfasını içermektedir. Projede React ve onu desteklemek amacıyla express ve cors gibi kütüphanelerden faydalanılmıştır.

## Projenin İçerdikleri
- [Özellikler](#özellikler)
- [Proje Mimarisi](#proje-mimarisi)
- [Backend](#backend)
- [Frontend](#frontend)
- [Kurulum ve Yükleme](#kurulum--yükleme)
- [Kullanım](#kullanım)
- [Yazar](#yazar)

---

## Özellikler
- **Kullanıcı Rezervasyonu:**
  - Adım adım rezervasyon formu (gün, saat, misafir sayısı, iletişim bilgileri)
  - Tek bir tarih ve saat seçildiğinde uygun masa sayısı ile sınırlandırma(4)
  - İletişim bilgilerinin doğrulaması
  - Bekleme listesi seçeneği imkanı(rezervasyon yapılmak istenen tarih ve saat müsait değilse)
  - Türkçenin yanı sıra ingilizce dil desteği ile hedeflenen kitlenin genişletilmesi
- **Admin Paneli:**
  - Giriş için ilgili kısımları username:admin / password:1234 şeklinde doldurmak yeterlidir
  - Buradan, yapılan rezervasyonlar görülebilir, düzenlenebilir ve silinebilir
  - Rezervasyonlar onaylanmak için işaretlenebilir veya duruma göre işaret kaldırılabilir
- **API:**
  - RESTful endpoints ile guests ve admin doğrulaması

---

## Proje Mimarisi
```
Js990Proje/
  backend/
    guestEditors/      # Misafir ve admin datası
    routes/            # Express ile oluşturulan yollar
    index.js           # Backend giriş noktası
    package.json       # Backend bağımlılıkları
  frontend/
    public/            # Yerleşik dosyalar (index.html, CSS)
    src/
      api/             # Axios örneği
      components/      # React bileşeni (App, AdminPage, MainPage, Steps)
      hooks/           # Özel React kancaları (data yakalama, admin, formlar)
      index.js         # React giriş noktası
    package.json       # Frontend bağımlılıkları
```

## Backend
- **Tek:** Node.js, Express, CORS
- **Giriş:** `backend/index.js`
- **API Çıkış noktaları:**
  - `POST /api/guests/admin` — Admin girişi
  - `GET /api/guests/` — Misafirlerin listesi
  - `POST /api/guests/` — Yeni misafir ekleme
  - `PUT /api/guests/:id` — Misafir güncelleme (onaylanma durumunu değiştirme gibi)
  - `DELETE /api/guests/:id` — Misafir silme
- **Mantık:**
  - Misafir ve admin datası bellekte saklanır (database yok)
  - Admin kimlik bilgileri sabit kodlanmıştır (bkz. `backend/guestEditors/admin.js`)

---

## Frontend
- **Teknoloji:** React, Axios, Bootstrap
- **Giriş:** `frontend/src/index.js`, `frontend/public/index.html`
- **Ana Bileşenler:**
  - `App` — Ana rota, Kullanıcı veya admin görünüşünü ayarlar
  - `MainPage` — Kullanıcı rezervasyon formu
  - `Steps` — Adım adım rezervasyon olayı
  - `AdminPage` — Admin girişi ve paneli
  - `AdminPaneli` — Admin rezervasyon erişimi
- **Özel Kancalar:**
  - `useGuests` — Misafir datasının yakalanması
  - `useCheckAdmin` — Admin girişinin işlenmesi
  - `useCreateGuest`, `useDeleteGuest`, `useUpdate` — Oluşturma, silme, ve güncelleme operasyonları

---

## Kurulum & Yükleme

### Önkoşullar
- Node.js (v16+ önerilir)

### Backend
```bash
cd backend
npm install
npm start
```
Backend şu adreste çalışacak [http://localhost:5000](http://localhost:5000)

### Frontend
```bash
cd frontend
npm install
npm start
```
Frontend varsayılan olarak [http://localhost:3000](http://localhost:3000) adresinde çalışacaktır.

---

## Kullanım
- **Kullanıcı:**
  - Frontend URL ziyaret edilerek formlarda gerekli kısımların doldurulması.
- **Admin:**
  - Frontend tarafında `/admin` adresine giderek, gerekli bilgilerle giriş yapılması, ve rezervasyonların düzenlenmesi.

---

## Yazar
- Mert Selamlar 
