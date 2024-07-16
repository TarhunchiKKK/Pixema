import { FC } from "react";
import { useFiltersForm } from "./hooks";
import { CrossIcon } from "@/assets";
import { Dropdown, Input, MultipleChooseInput, TabsInput } from "../Inputs";
import { COUNTRIES, GENRES, SORT_ORDERS } from "@/types";
import { FIRST_YEAR, LAST_YEAR, MAX_RATING, MIN_RATING } from "@/constants";
import { Button } from "../Button";

export const MoviesFiltersSidebar: FC = () => {
    const [filters, handleSubmit, handleReset, changehandlers] = useFiltersForm();

    return (
        <>
            <div className="fixed top-0 left-0 w-screen h-screen z-10 bg-[#00000080]"></div>
            <aside className="fixed top-0 right-0 z-20 min-h-screen flex flex-col justify-between items-center px-6 pt-8 pb-12">
                <div className="flex justify-between items-center mb-8">
                    <span className="font-semibold text-xl leading-8">Filters</span>

                    <img src={CrossIcon} alt="Close" />
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="mb-6 pb-[25px] border-b-1 border-b-graphite">
                        <TabsInput
                            label="Sort by"
                            tabs={Object.values(SORT_ORDERS)}
                            value={filters.sortOrder}
                            onChange={changehandlers.handleSortOrderChange}
                        />
                    </div>

                    <div className="mb-5">
                        <Input
                            label="Full or short movie name"
                            type="text"
                            placeholder="Your text"
                            value={filters.title}
                            onChange={changehandlers.handleTitleChange}
                        />
                    </div>

                    <div className="mb-5">
                        <Dropdown
                            label="Country"
                            placeholder="Select country"
                            options={Object.values(COUNTRIES)}
                            value={filters.country ?? ""}
                            onChange={changehandlers.handleCountryChange}
                        />
                    </div>

                    <div className="flex justify-between gap-6 mb-5">
                        <Input
                            label="Year"
                            type="text"
                            placeholder="From"
                            value={filters.yearFrom ?? FIRST_YEAR}
                            onChange={changehandlers.handleYearFromChange}
                        />

                        <Input
                            label={null}
                            type="text"
                            placeholder="To"
                            value={filters.yearTo ?? LAST_YEAR}
                            onChange={changehandlers.handleYearToChange}
                        />
                    </div>

                    <div className="flex justify-between gap-6 mb-5">
                        <Input
                            label="Rating"
                            type="text"
                            placeholder="From"
                            value={filters.ratingFrom ?? MIN_RATING}
                            onChange={changehandlers.handleYearFromChange}
                        />

                        <Input
                            label={null}
                            type="text"
                            placeholder="To"
                            value={filters.ratingTo ?? MAX_RATING}
                            onChange={changehandlers.handleYearToChange}
                        />
                    </div>

                    <div className="mb-10">
                        <MultipleChooseInput
                            label="Genre"
                            options={Object.values(GENRES)}
                            values={filters.genres ?? []}
                            onChange={changehandlers.handleGenresChange}
                        />
                    </div>

                    <div className="flex flex-col justify-between gap-4">
                        <Button content="Show results" isPrimary={false} />

                        <Button content="Clear filter" onClick={handleReset} isPrimary={false} />
                    </div>
                </form>
            </aside>
        </>
    );
};
