/* tslint:disable */
/* eslint-disable */
export const memory: WebAssembly.Memory;
export const handle_tx: (a: number, b: number, c: number) => void;
export const get_state: (a: number, b: number, c: number) => void;
export const snapshot: (a: number) => void;
export const decode_error: (a: number, b: number) => void;
export const get_config: (a: number) => void;
export const preempt: () => number;
export const autotick: () => number;
export const randSeed: () => bigint;
export const initialize: (a: number, b: number) => void;
export const finalize: (a: number) => void;
export const zkmain: () => void;
export const query_root: (a: number) => void;
export const verify_tx_signature: (a: number, b: number) => void;
export const test_merkle: () => void;
export const __wbindgen_add_to_stack_pointer: (a: number) => number;
export const __wbindgen_malloc: (a: number, b: number) => number;
export const __wbindgen_free: (a: number, b: number, c: number) => void;
