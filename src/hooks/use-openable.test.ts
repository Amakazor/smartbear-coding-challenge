import { act, renderHook } from "@testing-library/react-hooks";

import { useOpenable } from "./use-openable";

describe("useOpenable hook", () => {
    it("should toggle it's state", () => {
        const { result } = renderHook(() => useOpenable(false));
        expect(result.current.isOpen).toBe(false);
        act(() => {result.current.toggle();});
        expect(result.current.isOpen).toBe(true);
        act(() => {result.current.toggle();});
        expect(result.current.isOpen).toBe(false);
    });

    it("should close it's state", () => {
        const { result } = renderHook(() => useOpenable(true));
        expect(result.current.isOpen).toBe(true);
        act(() => {result.current.close();});
        expect(result.current.isOpen).toBe(false);
        act(() => {result.current.close();});
        expect(result.current.isOpen).toBe(false);
    });

    it("should open it's state", () => {
        const { result } = renderHook(() => useOpenable(false));
        expect(result.current.isOpen).toBe(false);
        act(() => {result.current.open();});
        expect(result.current.isOpen).toBe(true);
        act(() => {result.current.open();});
        expect(result.current.isOpen).toBe(true);
    });
});
