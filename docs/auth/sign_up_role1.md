---
sidebar_position: 1
---

# Sign Up as Petani / Individu

Role 1 : Petani / Individu

## Sign Up

Method : **[POST]**

Route :
**/v1/sign-up**

Data required to sign up as Petani / Individu :

| Field         | Data Type | Required     | Description                                           |
| ------------- | --------- | ------------ | ----------------------------------------------------- |
| username      | string    | Required     | username                                              |
| password      | string    | Required     | hashed password                                       |
| no_telp       | string    | Required     | mobile phone's number                                 |
| id_role       | number    | Required     | id that determines this account's role (individu = 1) |
| email         | string    | Required     | email                                                 |
| nama          | string    | Required     | name of the person                                    |
| tempat_lahir  | string    | Required     | place of birth                                        |
| tanggal_lahir | string    | Required     | birthday                                              |
| nik           | string    | Required     | Nomor Induk Kependudukan                              |
| jenis_kelamin | string    | Required     | gender                                                |
| provinsi      | string    | Required     | province of where the person live                     |
| kabupaten     | string    | Required     | regency of where the person live                      |
| kecamatan     | string    | Required     | subdistrict of where the person live                  |
| kelurahan     | string    | Required     | village of where the person live                      |
| alamat        | string    | Required     | more precise location of where the person live        |
| questionnare  | string    | Not Required | questionnare                                          |
| poktan        | string    | Required     | farmer group / kelompok tani                          |
| jenis_lahan   | string    | Required     | land type / jenis lahan                               |
| luas_lahan    | string    | Required     | land area / luas lahan                                |
| foto_lahan    | files     | Required     | several pictures of the egde of the land              |
| jenis_tanaman | string    | Required     | plant type / jenis tanaman                            |
| foto_tanaman  | files     | Required     | pictures of the plant                                 |

### CURL Example

```json
curl
--location 'localhost:8000/v1/sign-up' \
--form 'username="fardhan11"' \
--form 'password="12345678"' \
--form 'no_telp="123456789012"' \
--form 'id_role="1"' \
--form 'email="dhan@gmail.com"' \
--form 'nama="dhan"' \
--form 'tempat_lahir="depok"' \
--form 'tanggal_lahir="07-10-2000"' \
--form 'nik="12345678901234567890"' \
--form 'jenis_kelamin="pria"' \
--form 'provinsi="Jawa Barat"' \
--form 'kabupaten="Depok"' \
--form 'kecamatan="sukmajaya"' \
--form 'kelurahan="abadijaya"' \
--form 'alamat="bojong"' \
--form 'questionnare="jawab"' \
--form 'poktan="tani"' \
--form 'jenis_lahan="sawah"' \
--form 'luas_lahan="1000"' \
--form 'foto_lahan=@"postman-cloud:///1ef0147a-dcfd-4780-8c5c-628701248721"' \
--form 'foto_lahan=@"postman-cloud:///1ef0095c-a98e-46c0-b904-3ec9020fbfe5"' \
--form 'jenis_tanaman="Pohon pisang"' \
--form 'foto_tanaman=@"postman-cloud:///1ef0147a-dcfd-4780-8c5c-628701248721"' \
--form 'foto_tanaman=@"postman-cloud:///1ef0095c-a98e-46c0-b904-3ec9020fbfe5"'
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
  "message": "Email cannot be empty",
  "error": true
}
```

### Error Response - Email Validation

Email must be a valid email address

```json
{
  "status": 400,
  "message": "Email must be a valid email",
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
