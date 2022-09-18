import {Capability} from "../models/Capability";
import {FC} from "react";
import {CapabilityState} from "../models/CapabilityState";
import {replaceCapabilityState, setCapabilityStates} from "../sidebar/CommonSlice";
import {useAppDispatch} from "../store/hooks";

interface SwitchProps {
    capabilityState: CapabilityState
}

export const Switch:FC<SwitchProps> = ({capabilityState})=>{
    const dispatch = useAppDispatch()

    const switchState = (checked:boolean)=>{
            const clonedCapabilityState = structuredClone(capabilityState)
            console.log(clonedCapabilityState)
            clonedCapabilityState.state.onState.value = checked
            dispatch(replaceCapabilityState(clonedCapabilityState))
    }

    return  <div>
        <label htmlFor="default-toggle" className="inline-flex relative items-center cursor-pointer">
            <input type="checkbox" value="" id="default-toggle" className="sr-only peer" checked={capabilityState.state.onState.value} onChange={(c)=>{
                switchState(c.target.checked)
            }
            }/>
            <div
                className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
        </label>
    </div>
}