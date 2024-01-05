import { useEffect, useState } from "react";
import { SidebarMainNav } from "./SidebarMainNav";
import { SidebarWorkspace } from "./SidebarWorkspace";
import { SidebarBoardNav } from "./SidebarBoardNav";
import { boardService } from "../../services/board.service.local";
import { useSelector } from "react-redux";
import { addBoard, loadBoards, setCurBoard, setFilterBy } from "../../store/actions/board.actions";
import { useNavigate } from "react-router";
// import { boardService } from "../services/board.service";
// import { LottieAnimation } from "./LottieAnimation";

export function Sidebar() {
    const boards = useSelector((storeState) => storeState.boardModule.boards)
    const filterBy = useSelector((storeState) => storeState.boardModule.filterBy)

    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    const [isActive, setIsActive] = useState(false)
    const [isFocus, setIsFocus] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        loadData()
    }, [filterBy])

    async function loadData() {
        try {
            await loadBoards(filterBy)
        } catch (error) {
            showErrorMsgRedux('Cannot show Boards')
        }
    }

    // async function onAddNewBoard() {
    //     const newBoard = await boardService.save()
    //     navigate('board/' + newBoard._id)
    // }

    async function onAddNewBoard() {
        try {
            const newBoard = await addBoard()
            console.log('newBoard:', newBoard)
            setCurBoard(newBoard)
            navigate('board/' + newBoard._id)
        } catch (error) {
            console.error("Error removing task:", error)
        }
    }

    function onSetFilter(filterBy) {
        setFilterBy(filterBy)
    }

    function onOpenSidebar() {
        setIsSidebarOpen(!isSidebarOpen)
    }

    function onToggleDropdown() {
        setIsDropdownOpen(!isDropdownOpen)
    }

    function onToggleIsActive() {
        setIsActive(!isActive)
    }

    function onToggleIsFocus() {
        setIsFocus(!isFocus)
    }

    return (
        <section className="sidebar-container">
            <article className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
                <SidebarMainNav
                    onOpenSidebar={onOpenSidebar}
                    isSidebarOpen={isSidebarOpen}
                    isActive={isActive} />
                <SidebarWorkspace
                    onAddNewBoard={onAddNewBoard}
                    isDropdownOpen={isDropdownOpen}
                    isFocus={isFocus}
                    onToggleDropdown={onToggleDropdown}
                    onToggleIsFocus={onToggleIsFocus}
                    filterBy={filterBy}
                    onSetFilter={onSetFilter} />
                <SidebarBoardNav
                    boards={boards}
                    isActive={isActive}
                    // onToggleIsActive={onToggleIsActive}
                    filterBy={filterBy} />
                {/* <LottieAnimation /> */}
            </article>
        </section>

    )
}