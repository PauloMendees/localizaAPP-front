import PlusIcon from "../../../icons/Plus";
import OutlinedButton from "../../shared/OutlinedButton";

type EmpresasToolbarProps = {
    openEmpresaCard: () => void
}

export function EmpresasToolbar({openEmpresaCard}: EmpresasToolbarProps) {
    return (
        <div className='flex justify-between w-full items-center'>
            <span className='text-gray-700 text-[24px] sm:text-[26px] md:text-[28px] lg:text-3xl xl:text-3xl 2xl:text-3xl font-bold'>{`Empresas`}</span>
            <div className='flex items-center gap-5 w-full justify-end'>
                <OutlinedButton
                    className='h-10 min-w-[6rem] w-44'
                    onClick={openEmpresaCard}
                >
                    <PlusIcon />
                    <span className="text-cyan-600">{`Adicionar empresa`}</span>
                </OutlinedButton>
            </div>
        </div>
    )
}