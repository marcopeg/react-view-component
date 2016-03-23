/**
 * Use this decorator to wrap a View into a custom component and being able
 * to nest those components into an existing View structure
 */
export default function nestedView() {
    return function (WrappedComponent) {
        WrappedComponent.behavesLikeAView = true;
        return WrappedComponent;
    };
}
