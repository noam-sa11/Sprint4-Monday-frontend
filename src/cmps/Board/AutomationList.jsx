import { ArrowRightColoredIcon, ArrowRightIcon } from "../../services/svg.service"

export function AutomationList({ automations, isDisabled, handleSwitchChange }) {
    return (
        <ul className="clean-list automation-list">
            {automations.map((automation, idx) => {
                return <li key={idx} className={`${isDisabled && 'disabled'} flex column align-center automation-container`}>
                    <div className="flex column  justify-center info-container">
                        <div className="flex flow-container">
                            <div className="flex align-center justify-center icon-container">
                                <img className="logo" src="/img/myday-temp-logo.png" />
                            </div>
                            <div className="flex align-center justify-center arrow-container">
                                <ArrowRightColoredIcon />
                            </div>
                            <div className="flex align-center justify-center icon-container">
                                {automation.icon}
                            </div>
                        </div>

                        <p>{automation.txt}</p>
                    </div>

                    <button
                        disabled={isDisabled}
                        onClick={() => handleSwitchChange(!automation.isChecked, automation.name)}
                        className={`btn flex justify-center ${automation.isChecked && 'checked'}`}>
                        {automation.isChecked ? 'Remove Automation' : 'Add Automation'}
                    </button>
                </li>
            })}
        </ul>
    )
}