import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-components',
  templateUrl: './components.page.html',
  styleUrls: ['./components.page.scss'],
})
export class ComponentsPage {
  fieldText: string = "";
  operation: string = "";
  result: string = "";


  constructor() { }

  clickBtn(value: number) {
    const newNumber: string = value.toString();
    this.handleClick(newNumber)
  }

  handleClick(number: string) {
    this.fieldText += number;
    this.result += number;
  }

  clearBtn() {
    this.fieldText = "";
    this.operation = "";
    this.result = "";
  }
  
  operator(operator: string) {
    this.operation = operator;
    this.fieldText += this.operation.toString();
    this.result += this.operation.toString();;
  }

  equalBtn() {
    let newResult: string;
    if (this.fieldText && this.operation) {
      const parts = this.fieldText.split(/([\+\-\*\/])/);
        if (parts) {
            let result = parseInt(parts[0]);
            console.log(result)
            for (let i = 1; i < parts.length; i += 2) {
                const operator = parts[i];
                console.log(operator)
                const operand = parseInt(parts[i + 1]);
                console.log(operand)
                switch (operator) {
                    case '+':
                        result += operand;
                        console.log(result)
                        break;
                    case '-':
                        result -= operand;
                        console.log(result)
                        break;
                    case '*':
                        result *= operand;
                        console.log(result)
                        break;
                    case '/':
                        if (operand !== 0) {
                            result /= operand;
                            console.log(result)
                        } else {
                            newResult = 'Error: Division by zero';
                            this.result = newResult;
                            console.log(this.result);
                            return;
                        }
                        break;
                    default:
                      break;
                }
            }
            newResult = result.toString();
            this.result = newResult;
        }
    }
  }
}
