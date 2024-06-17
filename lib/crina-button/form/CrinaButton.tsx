
interface CrinaButtonProps {
    children:React.ReactNode
}

export const CrinaButton:React.FC<CrinaButtonProps> = ({children}) => {
    return (
        <button className="bg-red-100">
            {children}
        </button>
    );
};
