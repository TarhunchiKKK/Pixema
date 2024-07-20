import { FC } from "react";
import { useFiltersForm } from "./hooks";
import { CrossIcon } from "@/assets";
import { Dropdown, Input, MultipleChooseInput, TabsInput } from "../../Inputs";
import { Button } from "../../Button";
import { countries, genres, sortOrders } from "./constants";
import { useDispatch } from "react-redux";
import { toggleMoviesSidebar } from "@/redux";

export const MoviesFiltersSidebar: FC = () => {
    const dispatch = useDispatch();
    const [filters, handleSubmit, handleReset, changeHandlers] = useFiltersForm();

    const handleClose = () => {
        dispatch(toggleMoviesSidebar());
    };

    return (
        <>
            <div className="fixed top-0 left-0 w-screen h-screen z-10 bg-[#00000080]"></div>
            <aside className="absolute top-0 right-0 z-20 bg-context-white dark:bg-dark w-screen sm:w-[518px] h-screen flex flex-col px-6 pt-8 pb-12 overflow-y-auto no-scroll">
                <div className="w-full flex justify-between items-center mb-8">
                    <span className="font-semibold text-xl leading-8">Filters</span>

                    <img
                        src={CrossIcon}
                        alt="Close"
                        className="cursor-pointer"
                        onClick={handleClose}
                    />
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="mb-6 pb-[25px] border-b-1 border-b-graphite">
                        <TabsInput
                            label="Sort by"
                            tabs={sortOrders}
                            value={filters.sortOrder}
                            onChange={changeHandlers.handleSortOrderChange}
                        />
                    </div>

                    <div className="mb-5">
                        <Input
                            label="Full or short movie name"
                            type="text"
                            placeholder="Your text"
                            value={filters.title}
                            onChange={changeHandlers.handleTitleChange}
                        />
                    </div>

                    <div className="mb-5">
                        <Dropdown
                            label="Country"
                            options={countries}
                            value={filters.country}
                            onChange={changeHandlers.handleCountryChange}
                        />
                    </div>

                    <div className="flex justify-between items-end gap-6 mb-5">
                        <div>
                            <Input
                                label="Year"
                                type="text"
                                placeholder="From"
                                value={filters.yearFrom}
                                onChange={changeHandlers.handleYearFromChange}
                            />
                        </div>

                        <div>
                            <Input
                                label={null}
                                type="text"
                                placeholder="To"
                                value={filters.yearTo}
                                onChange={changeHandlers.handleYearToChange}
                            />
                        </div>
                    </div>

                    <div className="flex justify-between items-end gap-6 mb-5">
                        <div>
                            <Input
                                label="Rating"
                                type="text"
                                placeholder="From"
                                value={filters.ratingFrom}
                                onChange={changeHandlers.handleYearFromChange}
                            />
                        </div>

                        <div>
                            <Input
                                label={null}
                                type="text"
                                placeholder="To"
                                value={filters.ratingTo}
                                onChange={changeHandlers.handleYearToChange}
                            />
                        </div>
                    </div>

                    <div className="mb-10">
                        <MultipleChooseInput
                            label="Genre"
                            options={genres}
                            values={filters.genres ?? []}
                            onChange={changeHandlers.handleGenresChange}
                        />
                    </div>

                    <div className="flex flex-col justify-between gap-4">
                        <Button content="Show results" isPrimary={true} />

                        <Button content="Clear filter" onClick={handleReset} isPrimary={false} />
                    </div>
                </form>
            </aside>
        </>
    );
};
