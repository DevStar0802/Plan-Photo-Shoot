import { format } from 'date-fns'

export function changeDate(date) {

    // Parse the input date string into a Date object
    const dateObject = new Date(date);

    // Format the Date object in "mm/dd/yyyy" format
    return format(dateObject, 'MM/dd/yyyy');


}


