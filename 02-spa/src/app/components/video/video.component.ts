import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css'],
})
export class VideoComponent implements OnInit {

  displayUrl: boolean = false;
  urlVideo: string = 'https://www.youtube.com/embed/chm79IPVekU';

  constructor() {}

  ngOnInit(): void {}
}
