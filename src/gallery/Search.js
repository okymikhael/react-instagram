import React, { Component } from 'react'

export default class Search extends Component {
    render() {
        return (
            <div className="w-3/12">
                <form className="flex flex-wrap justify-center">
                    <input type="text" name="search" placeholder="Search" className="px-2 w-10/12 py-1 m-0 align-center bg-gray-50 text-sm text-center border border-gray-300 rounded"/>
                    {/* <input type="submit" value="Search" className="w-50 py-2.5 px-3 text-base border-black m-0 rounded-md ml-5 cursor-pointer"/> */}
                </form>
            </div>
        )
    }
}
