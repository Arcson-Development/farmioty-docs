---
sidebar_position: 4
---

# Sign Up as Supplier Alat

Role 4 : Supplier Alat

## Sign Up as Supplier Alat

Method : **[POST]**

Route :
**/v1/sign-up**

Data required to sign up as Penyuluh :

| Field             | Data Type | Required | Description                                           |
| ----------------- | --------- | -------- | ----------------------------------------------------- |
| username          | string    | Required | username                                              |
| password          | string    | Required | hashed password                                       |
| no_telp           | string    | Required | mobile phone's number                                 |
| id_role           | number    | Required | id that determines this account's role (supplier = 4) |
| email             | string    | Required | email                                                 |
| nama_toko         | string    | Required | store name                                            |
| tipe_toko         | string    | Required | store type                                            |
| provinsi          | string    | Required | province of where the person live                     |
| kabupaten         | string    | Required | regency of where the person live                      |
| kecamatan         | string    | Required | subdistrict of where the person live                  |
| kelurahan         | string    | Required | village of where the person live                      |
| alamat            | string    | Required | more precise location of where the person live        |
| pic               | string    | Required | Person in Charge                                      |
| tanggal_pendirian | string    | Required | establishment date                                    |
| akta_pendirian    | file      | Required | Deed of Incorporation                                 |
| siup              | file      | Required | Surat Izin Usaha Perusahaan                           |
| rekomendasi_kades | file      | Required | village head's recommendation                         |

### CURL Example

```json
curl
--location 'localhost:8000/v1/sign-up' \
--form 'username="fardhan2"' \
--form 'password="12345678"' \
--form 'no_telp="123456789012"' \
--form 'id_role="4"' \
--form 'email="dhan@gmail.com"' \
--form 'nama_toko="dhan berkah"' \
--form 'tipe_toko="koperasi"' \
--form 'provinsi="Jawa Barat"' \
--form 'kabupaten="Depok"' \
--form 'kecamatan="sukmajaya"' \
--form 'kelurahan="abadijaya"' \
--form 'alamat="bojong"' \
--form 'pic="Person In Charge"' \
--form 'tanggal_pendirian="07-10-2020"' \
--form 'akta_pendirian=@"postman-cloud:///1ef0147a-dcfd-4780-8c5c-628701248721"' \
--form 'siup=@"postman-cloud:///1ef0147a-dcfd-4780-8c5c-628701248721"' \
--form 'rekomendasi_kades=@"postman-cloud:///1ef0147a-dcfd-4780-8c5c-628701248721"'
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
  "message": "Nama Toko cannot be empty",
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
