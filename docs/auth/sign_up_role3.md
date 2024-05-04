---
sidebar_position: 3
---

# Sign Up as Penyuluh

Role 3 : Penyuluh

## Sign Up as Penyuluh

Method : **[POST]**

Route :
**/v1/sign-up**

Data required to sign up as Penyuluh :

| Field                    | Data Type | Required | Description                                           |
| ------------------------ | --------- | -------- | ----------------------------------------------------- |
| username                 | string    | Required | username                                              |
| password                 | string    | Required | hashed password                                       |
| no_telp                  | string    | Required | mobile phone's number                                 |
| id_role                  | number    | Required | id that determines this account's role (penyuluh = 3) |
| email                    | string    | Required | email                                                 |
| nama                     | string    | Required | name of the person                                    |
| nip                      | string    | Required | Nomor Identitas Pegawai Negeri Sipil                  |
| jenis_kelamin            | string    | Required | gender                                                |
| tempat_lahir             | string    | Required | place of birth                                        |
| tanggal_lahir            | string    | Required | birthday                                              |
| provinsi                 | string    | Required | province of where the person live                     |
| kabupaten                | string    | Required | regency of where the person live                      |
| kecamatan                | string    | Required | subdistrict of where the person live                  |
| kelurahan                | string    | Required | village of where the person live                      |
| alamat                   | string    | Required | more precise location of where the person live        |
| status_kepegawaian       | string    | Required | status kepegawaian / employment status                |
| pendidikan               | string    | Required | last educational degree                               |
| bidang_keahlian          | string    | Required | field of expertise                                    |
| jabatan_penyuluh         | string    | Required | instructor occupation                                 |
| badan_penyuluh_pertanian | files     | Required | agricultural extension agency                         |

### CURL Example

```json
curl
--location 'localhost:8000/v1/sign-up' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'username=fardhan5' \
--data-urlencode 'password=12345678' \
--data-urlencode 'no_telp=123456789012' \
--data-urlencode 'id_role=3' \
--data-urlencode 'email=dhan@gmail.com' \
--data-urlencode 'nama=dhan' \
--data-urlencode 'jenis_kelamin=pria' \
--data-urlencode 'nip=123456789012345678' \
--data-urlencode 'tempat_lahir=depok' \
--data-urlencode 'tanggal_lahir=07-10-2000' \
--data-urlencode 'provinsi=Jawa Barat' \
--data-urlencode 'kabupaten=Depok' \
--data-urlencode 'kecamatan=sukmajaya' \
--data-urlencode 'kelurahan=abadijaya' \
--data-urlencode 'alamat=bojong' \
--data-urlencode 'status_kepegawaian=tetap' \
--data-urlencode 'pendidikan=S1 pertanian' \
--data-urlencode 'bidang_keahlian=tanaman' \
--data-urlencode 'jabatan_penyuluh=suppervisor' \
--data-urlencode 'badan_penyuluh_pertanian=pt.tani'
```

## Response

### Success Response

```json
{
  "status": 201,
  "message": "Successfully register an account",
  "error": false
}
```

### Error Response - Validation

```json
{
  "status": 400,
  "message": "NIP cannot be empty",
  "error": true
}
```

### Error Response - Similar Username

Username must be unique

```json
{
  "status": 400,
  "message": "Something went wrong -> PrismaClientKnownRequestError: \nInvalid `tx.m_user.create()` invocation in\n/home/fardhan/Code/farmioty/farmioty-be/src/service/auth.service.ts:57:47\n\n  54 await prisma\n  55   .$transaction(async (tx) => {\n  56     // console.log(userData);\n→ 57     const createdUser = await tx.m_user.create(\nUnique constraint failed on the fields: (`username`)",
  "error": true
}
```
