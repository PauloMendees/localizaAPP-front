import { useEffect } from "react"
import useListEmpresa from "../../../hooks/empresa/useListEmpresa"
import useListUsers from "../../../hooks/users/useListUsers"
import Alerts from "../../shared/Alerts/Alerts"
import Button from "../../shared/Button"
import OutlinedButton from "../../shared/OutlinedButton"
import { When } from "../../shared/When"
import useVinculateUserCard from "./hooks/useVinculateUserCard"

type VinculateUserCard = {
    open: boolean
    close: () => void
}

export function VinculateUserCard({ close, open }: VinculateUserCard) {
    const { data: empresaList } = useListEmpresa()
    const { data: userList } = useListUsers()
    const { isLoading, onSubmit, errorMessage, successMessage, clearState } = useVinculateUserCard()

    return (
        <When value={open} >
            <Alerts
                message={errorMessage ? errorMessage : successMessage}
                severity={errorMessage ? 'error' : 'success'}
                clearState={clearState}
            />
            <form
                className='bg-white rounded-xl py-5 px-9 w-full flex flex-col gap-3'
                onSubmit={onSubmit}
            >
                <span className="md:text-base xl:text-lg 2xl:text-lg font-semibold text-gray-800 flex justify-start">
                    {`Vincular usuário`}
                </span>
                <div className="flex flex-row flex-wrap justify-between gap-y-2">
                    <div className="flex flex-col gap-1 items-start w-[48%]">
                        <label
                            className={`mb-1 text-primary-white text-base duration-200`}
                        >
                            {`Usuário`}
                        </label>
                        <select id="userSelect" required className="border-primary-white rounded-xl border-[1px] px-3 py-[6px] w-full">
                            <option value="" disabled selected>{`Selecione o usuário`}</option>
                            {userList?.data.data.map((item, index) => {
                                return (
                                    <option value={item.id} key={index}>{item.email}</option>
                                )
                            })}
                        </select>
                    </div>
                    <div className="flex flex-col gap-1 items-start w-[48%]">
                        <label
                            className={`mb-1 text-primary-white text-base duration-200`}
                        >
                            {`Empresa`}
                        </label>
                        <select id="empresaSelect" required className="border-primary-white rounded-xl border-[1px] px-3 py-[6px] w-full">
                            <option value="" disabled selected>{`Selecione a empresa`}</option>
                            {empresaList?.data.data.map((item, index) => {
                                return (
                                    <option value={item.id} key={index}>{item.name}</option>
                                )
                            })}
                        </select>
                    </div>
                </div>
                <div className='w-full flex justify-end items-center gap-5 mt-3'>
                    <OutlinedButton
                        className='border border-gray-600 text-gray-600 w-[80px] '
                        type="button"
                        onClick={close}
                    >
                        {`Cancelar`}
                    </OutlinedButton>
                    <Button
                        type='submit'
                        className=' text-gray-600 w-[80px]'
                        isLoading={isLoading}
                    >
                        {`Salvar`}
                    </Button>
                </div>
            </form>
        </When>
    )
}