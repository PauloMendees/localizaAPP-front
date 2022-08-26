import PlusIcon from "../../../icons/Plus"
import VinculateIcon from "../../../icons/VinculateIcon"
import Button from "../../shared/Button"
import OutlinedButton from "../../shared/OutlinedButton"

type UsersToolbarProps = {
    openVinculate: () => void
    openAddEmpresa: () => void
}

export function UsersToolbar({ openVinculate, openAddEmpresa }: UsersToolbarProps) {
    return (
        <div className='flex justify-between w-full items-center'>
            <span className='text-gray-700 text-[24px] sm:text-[26px] md:text-[28px] lg:text-3xl xl:text-3xl 2xl:text-3xl font-bold'>{`Usuários`}</span>
            <div className='flex items-center gap-5 w-full justify-end'>
                <OutlinedButton
                    onClick={openAddEmpresa}
                    className='h-10 min-w-[6rem] w-4 md:w-44'
                >
                    <PlusIcon />
                    <span className="text-cyan-600 hidden md:block">{`Adicionar empresa`}</span>
                </OutlinedButton>
                <Button onClick={openVinculate} className='h-10 min-w-[6rem] w-4 md:w-44'>
                    <VinculateIcon />
                    <span className="hidden md:block">{`Vincular usuário`}</span>
                </Button>
            </div>
        </div>
    )
}