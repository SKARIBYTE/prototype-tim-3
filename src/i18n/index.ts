import id from './id.json';
import en from './en.json';

export const translations = { id, en };
export type Lang = 'id' | 'en';
export type Translations = typeof id;
