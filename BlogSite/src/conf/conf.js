const conf = {
  appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
  appwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
  appwriteDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
  appwriteCollectionId: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
  appwriteBucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
};
// const conf = {
//   appwriteUrl: String("https://cloud.appwrite.io/v1"),
//   appwriteProjectId: String("67f3f5470023b46dd1d2"),
//   appwriteDatabaseId: String("67f3f5470023b46dd1d2"),
//   appwriteCollectionId: String("67f3f63c001f058f3fec"),
//   appwriteBucketId: String("67f3f7d500185335314f"),
// };

export default conf;
