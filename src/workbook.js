import * as XLSX from 'sheetjs';
//takes an object and uses its info. 
const createBook = (events) => {
    //create workbook
    const wb = XLSX.utils.book_new();
    wb.SheetNames.push("Test Sheet");
    let ws_data = [['Edit','Event','Venue','Event Date','EventTime','Quantity','Section','Row','SeatFrom','SeatThru','Notes','Cost','TicketID','EDelivery','InHandDate','Instant','SplitValue','StockType','Spec']];
    events.upcoming_events.forEach((show)=>{
        let rowArray = ['Y',events.name,show.venue,show.date,show.time,'1','1','1','1','2','','0','','Y','','','','ELECTRONIC','N']
        ws_data.push(rowArray)
    });
    const ws = XLSX.utils.aoa_to_sheet(ws_data);
    wb.Sheets["Test Sheet"] = ws;
    const wbout = XLSX.writeFileXLSX(wb, "Test.xlsx",{compression:true});
    return wbout
}

export { createBook }