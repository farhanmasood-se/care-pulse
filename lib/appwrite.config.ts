import * as sdk from 'node-appwrite';

export const {
  PROJECT_ID,
  API_KEY,
  DATABASE_ID,
  PATIENT_COLLECTION_ID,
  DOCTOR_COLLECTION_ID,
  APPOINTMENT_COLLECTION_ID,
  NEXT_PUBLIC_BUCKET_ID,
  NEXT_PUBLIC_ENDPOINT,
} = process.env;

const client = new sdk.Client();

client
  .setEndpoint('https://cloud.appwrite.io/v1')
  .setProject('6698dc80003e267134c3')
  .setKey(
    '7bd9cd6051c24c8123625f0709d42a5a66b31c806f0a86898a7c27d7247a2328d171d7d979252087935d7750ab80fbb416155f3d847b49994c044f298b414ca7b8165011fbf2c3253dbccaf3d91e5ed527ef069f821a2314047b171d4bcf3ad7a1441da4d0b198c5f2d7da53da579fd4adb96696e91e3c74e076ee47646fe10c',
  );

export const databases = new sdk.Databases(client);
export const storage = new sdk.Storage(client);
export const messaging = new sdk.Messaging(client);
export const users = new sdk.Users(client);
