export interface IWireds {
  "ativadores": IWired[];
  "efeitos": IWired[];
  "condicoes positivas": IWired[];
  "condicoes negativas": IWired[];
  "extras": IWired[];
  "comparadores": IWired[];
  "operadores": IWired[];
  "iron wireds": IWired[];
}

export interface IWired {
  name: string;
  help: string;
}

export type IWiredType = "ativadores" | "efeitos" | "condicoes positivas" | "condicoes negativas" | "extras" | "comparadores" | "operadores" | "iron wireds";
