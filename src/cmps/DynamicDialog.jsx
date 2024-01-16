import { useSelector } from "react-redux"
import { resetDynamicDialog } from "../store/actions/system.actions"

export function DynamicDialog() {
    const dialogData = useSelector((storeState) => storeState.systemModule.dynamicDialog)

    if (!dialogData.isOpen) return
    return (
        <div className="dynamic-dialog">
            <div className="black-screen" onClick={resetDynamicDialog}></div>

            <div className="dialog-content">
                {dialogData.contentCmp}
            </div>
        </div>
    )
}