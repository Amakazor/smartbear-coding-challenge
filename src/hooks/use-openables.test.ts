import { act, renderHook } from "@testing-library/react-hooks";

import { useOpenables } from "./use-openables";

const initialStates = {
    a: false,
    b: false,
    c: false,
};

const initialStatesTruthy = {
    a: true,
    b: true,
    c: true,
};

describe("useOpenables hook", () => {
    it("should toggle it's state", () => {
        const { result } = renderHook(() => useOpenables(initialStates));

        expect(result.current.openStates.a).toBe(false);
        expect(result.current.openStates.b).toBe(false);
        expect(result.current.openStates.c).toBe(false);

        act(() => {result.current.toggle();});

        expect(result.current.openStates.a).toBe(true);
        expect(result.current.openStates.b).toBe(true);
        expect(result.current.openStates.c).toBe(true);

        act(() => {result.current.toggle();});

        expect(result.current.openStates.a).toBe(false);
        expect(result.current.openStates.b).toBe(false);
        expect(result.current.openStates.c).toBe(false);
    });

    it("should close it's state", () => {
        const { result } = renderHook(() => useOpenables(initialStatesTruthy));

        expect(result.current.openStates.a).toBe(true);
        expect(result.current.openStates.b).toBe(true);
        expect(result.current.openStates.c).toBe(true);

        act(() => {result.current.closeAll();});

        expect(result.current.openStates.a).toBe(false);
        expect(result.current.openStates.b).toBe(false);
        expect(result.current.openStates.c).toBe(false);

        act(() => {result.current.closeAll();});

        expect(result.current.openStates.a).toBe(false);
        expect(result.current.openStates.b).toBe(false);
        expect(result.current.openStates.c).toBe(false);
    });

    it("should open it's state", () => {
        const { result } = renderHook(() => useOpenables(initialStates));

        expect(result.current.openStates.a).toBe(false);
        expect(result.current.openStates.b).toBe(false);
        expect(result.current.openStates.c).toBe(false);

        act(() => {result.current.openAll();});

        expect(result.current.openStates.a).toBe(true);
        expect(result.current.openStates.b).toBe(true);
        expect(result.current.openStates.c).toBe(true);

        act(() => {result.current.openAll();});

        expect(result.current.openStates.a).toBe(true);
        expect(result.current.openStates.b).toBe(true);
        expect(result.current.openStates.c).toBe(true);
    });

    it("should open a specific state", () => {
        const { result } = renderHook(() => useOpenables(initialStates));

        expect(result.current.openStates.a).toBe(false);
        expect(result.current.openStates.b).toBe(false);
        expect(result.current.openStates.c).toBe(false);

        act(() => {result.current.open("a");});

        expect(result.current.openStates.a).toBe(true);
        expect(result.current.openStates.b).toBe(false);
        expect(result.current.openStates.c).toBe(false);

        act(() => {result.current.open("b");});

        expect(result.current.openStates.a).toBe(true);
        expect(result.current.openStates.b).toBe(true);
        expect(result.current.openStates.c).toBe(false);

        act(() => {result.current.open("c");});

        expect(result.current.openStates.a).toBe(true);
        expect(result.current.openStates.b).toBe(true);
        expect(result.current.openStates.c).toBe(true);
    });

    it("should close a specific state", () => {
        const { result } = renderHook(() => useOpenables(initialStatesTruthy));

        expect(result.current.openStates.a).toBe(true);
        expect(result.current.openStates.b).toBe(true);
        expect(result.current.openStates.c).toBe(true);

        act(() => {result.current.close("a");});

        expect(result.current.openStates.a).toBe(false);
        expect(result.current.openStates.b).toBe(true);
        expect(result.current.openStates.c).toBe(true);

        act(() => {result.current.close("b");});

        expect(result.current.openStates.a).toBe(false);
        expect(result.current.openStates.b).toBe(false);
        expect(result.current.openStates.c).toBe(true);

        act(() => {result.current.close("c");});

        expect(result.current.openStates.a).toBe(false);
        expect(result.current.openStates.b).toBe(false);
        expect(result.current.openStates.c).toBe(false);
    });

    it("should open all state while closing one", () => {
        const { result } = renderHook(() => useOpenables(initialStates));

        expect(result.current.openStates.a).toBe(false);
        expect(result.current.openStates.b).toBe(false);
        expect(result.current.openStates.c).toBe(false);

        act(() => {result.current.openAllCloseOne("a");});

        expect(result.current.openStates.a).toBe(false);
        expect(result.current.openStates.b).toBe(true);
        expect(result.current.openStates.c).toBe(true);

        act(() => {result.current.openAllCloseOne("b");});

        expect(result.current.openStates.a).toBe(true);
        expect(result.current.openStates.b).toBe(false);
        expect(result.current.openStates.c).toBe(true);

        act(() => {result.current.openAllCloseOne("c");});

        expect(result.current.openStates.a).toBe(true);
        expect(result.current.openStates.b).toBe(true);
        expect(result.current.openStates.c).toBe(false);
    });

    it("should close all states while opening one", () => {
        const { result } = renderHook(() => useOpenables(initialStatesTruthy));

        expect(result.current.openStates.a).toBe(true);
        expect(result.current.openStates.b).toBe(true);
        expect(result.current.openStates.c).toBe(true);

        act(() => {result.current.closeAllOpenOne("a");});

        expect(result.current.openStates.a).toBe(true);
        expect(result.current.openStates.b).toBe(false);
        expect(result.current.openStates.c).toBe(false);

        act(() => {result.current.closeAllOpenOne("b");});

        expect(result.current.openStates.a).toBe(false);
        expect(result.current.openStates.b).toBe(true);
        expect(result.current.openStates.c).toBe(false);

        act(() => {result.current.closeAllOpenOne("c");});

        expect(result.current.openStates.a).toBe(false);
        expect(result.current.openStates.b).toBe(false);
        expect(result.current.openStates.c).toBe(true);
    });

    it("should close all states except one", () => {
        const { result } = renderHook(() => useOpenables(initialStatesTruthy));

        expect(result.current.openStates.a).toBe(true);
        expect(result.current.openStates.b).toBe(true);
        expect(result.current.openStates.c).toBe(true);

        act(() => {result.current.closeExcept("a");});

        expect(result.current.openStates.a).toBe(true);
        expect(result.current.openStates.b).toBe(false);
        expect(result.current.openStates.c).toBe(false);

        act(() => {result.current.closeExcept("b");});

        expect(result.current.openStates.a).toBe(false);
        expect(result.current.openStates.b).toBe(false);
        expect(result.current.openStates.c).toBe(false);
    });

    it("should open all states except one", () => {
        const { result } = renderHook(() => useOpenables(initialStates));

        expect(result.current.openStates.a).toBe(false);
        expect(result.current.openStates.b).toBe(false);
        expect(result.current.openStates.c).toBe(false);

        act(() => {result.current.openExcept("a");});

        expect(result.current.openStates.a).toBe(false);
        expect(result.current.openStates.b).toBe(true);
        expect(result.current.openStates.c).toBe(true);

        act(() => {result.current.openExcept("b");});

        expect(result.current.openStates.a).toBe(true);
        expect(result.current.openStates.b).toBe(true);
        expect(result.current.openStates.c).toBe(true);
    });

    it("should perform arbitrary updates", () => {
        const { result } = renderHook(() => useOpenables(initialStates));

        expect(result.current.openStates.a).toBe(false);
        expect(result.current.openStates.b).toBe(false);
        expect(result.current.openStates.c).toBe(false);

        act(() => {result.current.update((key, value) => key === "b" ? !value : value);});

        expect(result.current.openStates.a).toBe(false);
        expect(result.current.openStates.b).toBe(true);
        expect(result.current.openStates.c).toBe(false);

        act(() => {result.current.update((key, value) => !value);});

        expect(result.current.openStates.a).toBe(true);
        expect(result.current.openStates.b).toBe(false);
        expect(result.current.openStates.c).toBe(true);
    });
});
