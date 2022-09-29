declare global {
  namespace NodeJS {
    interface ProcessEnv {
      //NODE_ENV: 'development' | 'production';
      NEXT_PUBLIC_KEYWORD1: string
      NEXT_PUBLIC_KEYWORD2: string
      NEXT_PUBLIC_KEYWORD3: string
      NEXT_PUBLIC_KEYWORD4: string
      NEXT_PUBLIC_KEYWORD5: string
    }
  }
}

export {}
