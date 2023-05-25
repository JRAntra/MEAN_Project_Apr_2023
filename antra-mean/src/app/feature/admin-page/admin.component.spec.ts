import { ComponentFixture, TestBed } from '@angular/core/testing'

import { AdminPageComponent } from './admin.component'

describe('AdminPageComponent', () => {
	let component: AdminPageComponent
	let fixture: ComponentFixture<AdminPageComponent>

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [AdminPageComponent]
		}).compileComponents()

		fixture = TestBed.createComponent(AdminPageComponent)
		component = fixture.componentInstance
		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})
})
