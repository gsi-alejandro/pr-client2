/**
 * Created by cervantes on 26/12/16.
 */
import { Component } from '@angular/core';
import '../../public/css/styles.css';
@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['app.component.scss']
})
export class AppComponent {

    public openModal(){
        $('#myModal').modal();
    }
}
