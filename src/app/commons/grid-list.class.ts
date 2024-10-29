import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";

export abstract class GridList<T> {

    colsDesktop:number = 4;
    rowHeight = '380px';
    isDinamic = true;
    protected data!: Array<T>;

    constructor(private breakpointObserver:BreakpointObserver){
        this.getNumberOfColumns()
    }

    protected getNumberOfColumns():number {
        if(this.isDinamic){
            if (this.breakpointObserver.isMatched(Breakpoints.XSmall)) {
                this.colsDesktop = 1; // 1 colunm for extra small screen
                return this.colsDesktop
            } else if (this.breakpointObserver.isMatched(Breakpoints.Small)) {
                this.colsDesktop = 2; // 2 colunms for small screens
                return this.colsDesktop
            } else if (this.breakpointObserver.isMatched(Breakpoints.Medium)) {
                this.colsDesktop = 3; // 3 colunms for medium screens
                return this.colsDesktop
            } else {
                this.colsDesktop = 4; // number defined for biggest screens
                return this.colsDesktop
            }
        }
        return this.colsDesktop
    }

}