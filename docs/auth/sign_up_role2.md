---
sidebar_position: 2
---

# Sign Up as Poktan

Role 2 : Poktan / Kelompok Tani

## Sign Up as Poktan / Kelompok Tani

Method : **[POST]**

Route :
**/v1/sign-up**

Data required to sign up as Poktan / Kelompok Tani:

| Field               | Data Type | Required | Description                                         |
| ------------------- | --------- | -------- | --------------------------------------------------- |
| username            | string    | Required | username                                            |
| password            | string    | Required | hashed password                                     |
| no_telp             | string    | Required | mobile phone's number                               |
| id_role             | number    | Required | id that determines this account's role (poktan = 2) |
| email               | string    | Required | email                                               |
| nama_poktan         | string    | Required | farmer group's name                                 |
| tanggal_pembentukan | string    | Required | establishment date                                  |
| bentuk_organisasi   | string    | Required | organization structure                              |
| provinsi            | string    | Required | province of where the person live                   |
| kabupaten           | string    | Required | regency of where the person live                    |
| kecamatan           | string    | Required | subdistrict of where the person live                |
| kelurahan           | string    | Required | village of where the person live                    |
| alamat              | string    | Required | more precise location of where the                  |
| gapoktan            | string    | Required | farmer group association                            |
| legalitas           | file      | Required | legality doc                                        |

### CURL Example

```json
curl
--location 'localhost:8000/v1/sign-up' \
--form 'username="fardhan8"' \
--form 'password="12345678"' \
--form 'no_telp="123456789012"' \
--form 'id_role="2"' \
--form 'email="dhan@gmail.com"' \
--form 'nama_poktan="dhan tani"' \
--form 'tanggal_pembentukan="2024-4-22"' \
--form 'bentuk_organisasi="ormas"' \
--form 'provinsi="Jawa Barat"' \
--form 'kabupaten="Depok"' \
--form 'kecamatan="sukmajaya"' \
--form 'kelurahan="abadijaya"' \
--form 'alamat="bojong"' \
--form 'gapoktan="depok tani"' \
--form 'legalitas=@"postman-cloud:///1ef0147a-dcfd-4780-8c5c-628701248721"'
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
    "message": "Nama Poktan cannot be empty",
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
