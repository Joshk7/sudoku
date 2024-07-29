"use client";

interface BoardCellProps {
    cellValue?: number | null;
}

const BoardCell = ({ cellValue, }: BoardCellProps) => {
    return (
        <div className="w-10 h-10 border flex justify-center items-center">
            {cellValue}
        </div>
    )
}

export default BoardCell;