import { GENAI_KEY } from './Constants';
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: GENAI_KEY });

export default ai;