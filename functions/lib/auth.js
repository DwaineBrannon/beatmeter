"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUserProfilev1 = void 0;
const functions = __importStar(require("firebase-functions/v1"));
const admin = __importStar(require("firebase-admin"));
/**
 * Firebase Auth trigger: When a new user is created,
 * create a corresponding user profile document in Firestore
 * Initializes musicCollection, rateLater, followers, following, etc.
 */
exports.createUserProfilev1 = functions.auth.user().onCreate(async (user) => {
    const uid = user.uid;
    const email = user.email || '';
    const displayName = user.displayName || '';
    const photoURL = user.photoURL || '';
    functions.logger.info(`Creating profile for user: ${uid}, ${displayName}`);
    const profileData = {
        uid,
        email,
        displayName,
        photoURL,
        createdAt: admin.firestore.FieldValue.serverTimestamp(),
        musicCollection: [],
        rateLater: [],
        followers: [],
        following: [],
        profileComplete: false,
    };
    try {
        await admin.firestore().collection('userprofiles').doc(uid).set(profileData);
        functions.logger.info(`Profile created for user: ${uid}`);
    }
    catch (error) {
        functions.logger.error(`Error creating profile for user ${uid}:`, error);
    }
});
//# sourceMappingURL=auth.js.map