import { Action, createReducer, on } from "@ngrx/store";
import { incrementar, resetar } from "./contador.actions";

export const estadoInicial = 0;

const _contadorReducer = createReducer(
    estadoInicial,
    on(incrementar, (estado) => estado + 1),
    on(resetar, (estado) => 0)
);

export function contadorReducer(estado: number | undefined, action: Action) {
    return _contadorReducer(estado, action);
}